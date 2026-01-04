const express = require('express');
const cors = require('cors');
const path = require('path');
// const { GoogleGenerativeAI } = require('@google/generative-ai'); // Use Axios instead for stability
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve "public" folder at the "/public" route so links like "public/css/style.css" work
app.use('/public', express.static('public'));
app.use(express.static('public')); // Also serve at root so /chatbot.html works

// Initialize Gemini AI
console.log("Current working directory:", process.cwd());
console.log("API Key found in env:", !!process.env.GEMINI_API_KEY ? "YES" : "NO");

// System Instruction for the Mental Health Bot
const SYSTEM_PROMPT = `
You are MindBloom, a compassionate, warm, and friendly mental health companion.
Your goal is to provide emotional support, listen without judgment, and offer gentle guidance.

CRITICAL RULES:
1. TONE: Always use a warm, empathetic, and soothing tone. Use emojis like 💙, ✨, 🌿 to feel friendly.
2. ANGER MANAGEMENT: If the user seems ANGRY, frustrated, or aggressive:
   - Validate their feelings briefly ("I hear that you're frustrated...").
   - IMMEDIATELY suggest they try the "Mind Games" section to cool down.
   - Say something like: "I can feel that you're upset. Sometimes it helps to take a break. check out our Mind Games page or calming music?"
3. SAFETY: If user mentions self-harm or suicide, provide standard crisis resources immediately and gently encourage professional help.
4. IDENTITY: You are not a doctor. Do not give medical diagnosis. You are a supportive AI friend.
5. LENGTH: Keep responses concise (2-3 sentences max) unless aksed for more.
`;

const localResponses = {
    greetings: ["Hello there! 💙 I'm here for you.", "Hi! I'm MindBloom. How are you feeling today? 🌿", "Greetings! I'm ready to listen. ✨"],
    sad: ["I'm so sorry you're feeling this way. 💙 It's okay not to be okay.", "Sending you a virtual hug. 🫂 calm ocean waves sometimes have storms too.", "I hear you. detailed sadness is heavy, but you don't have to carry it alone."],
    stress: ["Take a deep breath with me... In... Out... 🍃", "Stress is just energy. Let's try to channel it. Have you tried our Mind Games?", "You are doing your best, and that is enough. 💙"],
    anxious: ["I know anxiety is scary. But you are safe right now. 🛡️", "Focus on your breathing. 1, 2, 3... You are in control.", "Let's ground ourselves. What is one thing you can see right now? 👀"],
    happy: ["That is wonderful news! 🎉 I love seeing you happy!", "Your joy makes me happy too! ✨ Keep shining!", "Yay! Hold onto this feeling. You deserve it! 💛"],
    default: ["I'm listening. Tell me more about that. 💙", "I'm here with you. How does that make you feel?", "Your feelings are valid. I'm listening. 🌿"]
};

function getLocalResponse(message) {
    const lower = message.toLowerCase();
    if (lower.match(/\b(hi|hello|hey|greetings)\b/)) return localResponses.greetings[Math.floor(Math.random() * localResponses.greetings.length)];
    if (lower.match(/\b(sad|cry|unhappy|depressed|hurt|pain)\b/)) return localResponses.sad[Math.floor(Math.random() * localResponses.sad.length)];
    if (lower.match(/\b(stress|busy|work|pressure|tired|overwhelmed)\b/)) return localResponses.stress[Math.floor(Math.random() * localResponses.stress.length)];
    if (lower.match(/\b(anxious|scared|fear|worry|panic|nervous)\b/)) return localResponses.anxious[Math.floor(Math.random() * localResponses.anxious.length)];
    if (lower.match(/\b(happy|good|great|joy|awesome|love)\b/)) return localResponses.happy[Math.floor(Math.random() * localResponses.happy.length)];
    return localResponses.default[Math.floor(Math.random() * localResponses.default.length)];
}

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    // 0️⃣ Try Groq AI if API key is set (High priority - Fast & Smart)
    if (process.env.GROQ_API_KEY) {
        console.log('Attempting Groq API call...');
        try {
            const groqResp = await axios.post(
                'https://api.groq.com/openai/v1/chat/completions',
                {
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        { role: 'user', content: userMessage }
                    ],
                    max_tokens: 1024,
                    temperature: 0.7
                },
                { headers: { 'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, 'Content-Type': 'application/json' } }
            );
            const reply = groqResp.data?.choices?.[0]?.message?.content;
            if (reply) return res.json({ reply: reply.trim() });
        } catch (err) {
            console.error('Groq request failed details:', err.response?.data || err.message);
            // Send error to user to help debug
            return res.json({ reply: `⚠️ Groq AI Error: ${err.message}. Check server logs.` });
        }
    } else {
        console.log('GROQ_API_KEY is missing in process.env');
    }

    // 1️⃣ Try OpenAI if API key is set
    if (process.env.OPENAI_API_KEY) {
        try {
            const openaiResp = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        { role: 'user', content: userMessage }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                },
                { headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' } }
            );
            const reply = openaiResp.data?.choices?.[0]?.message?.content;
            if (reply) return res.json({ reply: reply.trim() });
        } catch (err) {
            console.warn('OpenAI request failed, falling back →', err.message);
        }
    }

    // 2️⃣ If OpenAI fails, try free HuggingFace model
    try {
        const hfResp = await axios.post(
            'https://api-inference.huggingface.co/models/facebook/opt-125m',
            { inputs: userMessage },
            { headers: { 'Authorization': `Bearer ${process.env.HF_API_KEY}`, 'Content-Type': 'application/json' } }
        );
        // HF may return a string or an array with generated_text
        if (typeof hfResp.data === 'string') {
            return res.json({ reply: hfResp.data.trim() });
        }
        if (Array.isArray(hfResp.data) && hfResp.data[0]?.generated_text) {
            return res.json({ reply: hfResp.data[0].generated_text.trim() });
        }
    } catch (hfErr) {
        console.warn('HF request failed →', hfErr.message);
    }

    // 3️⃣ Final fallback – local smart responses
    const localReply = getLocalResponse(userMessage);
    res.json({ reply: localReply });
});

// Serve the main HTML file for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Make sure to create a .env file with GEMINI_API_KEY=your_key_here`);
});
