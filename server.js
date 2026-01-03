const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json());
// Serve "public" folder at the "/public" route so links like "public/css/style.css" work
app.use('/public', express.static('public'));

// Initialize Gemini AI
// NOTE: You must get an API KEY from https://aistudio.google.com/ and put it in a .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY_HERE");

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

app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!process.env.GEMINI_API_KEY) {
            console.warn("WARNING: GEMINI_API_KEY is missing in .env file");
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: SYSTEM_PROMPT }],
                },
                {
                    role: "model",
                    parts: [{ text: "I understand. I am MindBloom, ready to offer compassionate support. 💙" }],
                },
            ],
            generationConfig: {
                maxOutputTokens: 150,
            },
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });

    } catch (error) {
        console.error('Error with Gemini API:', error);
        // Fallback response if API fails or no key provided
        res.json({
            reply: "I'm having a little trouble connecting to my brain right now 🧠. But I'm still here with you! Maybe try asking again in a moment? 💙"
        });
    }
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
