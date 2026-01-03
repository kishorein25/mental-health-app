const responses = {
    abuse: ["💙 I'm so deeply sorry someone hurt you. What happened to you is NOT your fault. You did not deserve it. Your pain is real and valid. You are safe to feel it here.","💜 You are BRAVE for speaking about this. Abuse is never okay - never your fault. You are worthy of love, respect, and safety. Please know: healing is possible.","✨ What happened wasn't because of you - it was because of them. You are not broken. You deserve safety, kindness, and people who honor your boundaries. You matter.","🌟 Your feelings make sense. Abuse creates confusion, shame, guilt - but those feelings don't make the truth. The truth: you're a good person who had bad things done to you. Recovery is your right."],
    parent: ["💙 What your parent did was NOT okay. Period. Your pain is valid. You're not ungrateful or disrespectful for being hurt by harm. You deserved protection.","💜 It's not your fault. Parents are supposed to protect. If they hurt you instead, that's their failure, not yours. You're allowed to feel angry, sad, hurt.","✨ You didn't cause this. You couldn't have prevented it. You couldn't have stopped it. The responsibility is entirely theirs. Your job is healing, not fixing them.","🌟 You are worthy even if they couldn't see it. Your value doesn't depend on their approval. You deserve safety and love - especially from yourself."],
    stress: ["💙 I sense you're carrying weight right now, and I want you to know - that's okay. Stress is real. You're not weak for feeling this. What's ONE thing you could let go of today?","🌙 Stress tells lies - everything depends on you, you must be perfect. But here's the truth: you're enough. Your worth isn't your productivity. What's making this heavy?","✨ That weight of responsibility shows courage. Stress is your mind saying 'I need help' or 'I need rest'. Both are okay. What can you release today?","💝 What you're experiencing is real. But YOU matter more than any deadline or expectation. Your mental health is the foundation. What would it take to put yourself first?"],
    anxious: ["💙 That racing heart - I see you. You're safe RIGHT NOW. Your anxiety tries to protect, but it's overprotective. You're more capable than it says.","🌟 Anxiety lies - it says 'bad WILL happen' but truth is 'bad MIGHT happen, and I can handle it'. You've handled hard things. You can calm this.","✨ Losing control? That's anxiety's move. But you have control - over breath, focus, what you believe. Right now, you're okay. Trust that.","💜 Worrying doesn't prevent bad things - it just steals your peace. I'm here. You don't have to white-knuckle through this alone."],
    sad: ["💙 I feel the heaviness. Sadness means you're human, something matters. You can feel this way. You don't need to be strong right now. What's breaking your heart?","🌙 Sadness is processing loss beautifully. It shows how deeply you feel. This pain will ease. It's okay to feel it right now.","💜 Grief takes time. The fact you're reaching out shows incredible strength. What would comfort you even slightly right now?","✨ I honor your pain. Sadness visits us. You're not broken - just going through something hard. You're still here, still trying. That's everything."],
    work: ["💼 Work pressure is REAL. But: your worth ≠ your work. You exist, therefore you're valuable. The world needs you alive and well, not burned out.","🌟 Work consumes you - permission given to set boundaries. 'No' is complete. Your mental health > any deadline. What boundary can you set?","💙 Hustle culture lies - more work ≠ more worth. Rest IS productive, necessary, healthy. You're not lazy for needing breaks. You're human.","✨ I see your hard work. But are you getting back joy, rest, peace? A job serves YOUR life, not consumes it. You matter most."],
    study: ["📚 Grades ≠ your worth. Intelligence ≠ test scores. Your human value is intrinsic. Study for joy of learning, not the grade.","💜 Study pressure suffocating? It feels like everything depends on one exam. But you're MORE than your grades. How can you be kind to yourself?","✨ Your mental health IS actual health - not luxury. You can't learn burned out or anxious. Yourself first. Your brain thanks you.","🌟 World doesn't need burned-out students. It needs YOU whole, alive. Study hard AND sleep, rest, play. Be kind. You're enough."],
    lonely: ["💙 Loneliness is painful. But: you're NEVER truly alone. Reaching out is brave. You're worthy of connection, love. What does true connection look like?","🌙 Loneliness ≠ unlovable. You crave connection - beautiful. What would true connection feel like right now? I'm listening fully.","✨ YOU matter. Your thoughts, feelings, dreams. Loneliness shows capacity for love. That's a gift. Could you reach out to one person?","💜 Being with people who don't SEE you is deepest loneliness. You need people who GET you. I see you. Right here. Valid."],
    tired: ["😴 Exhaustion screams you need REST. Real, deep, guilt-free. Not productivity disguised as rest. What does true rest look like for you?","💙 Burnout says STOP. Listen. Pushing through worsens it. You're not lazy - you're depleted. What's ONE thing you could stop today?","✨ Fatigue is information - something's unsustainable. What drains you? What can you release, delegate, say NO to? Protect your energy.","🌙 Running on empty? Refill it. You don't have to keep going. You're allowed rest, slowness, stopping. What genuinely restores you?"],
    overwhelmed: ["🌊 Drowning in too much. You've taken on TOO MUCH. Beautiful truth: you CAN take some DOWN. Right now - what ONE thing needs attention?","💙 Overwhelm says PAUSE. Not harder, not more. PAUSE. Step back. Usually what's here is manageable. What's actually in front of you?","✨ You can't do everything, be everything. That's OKAY. You have limits. Pick THREE things, let rest go. Just for now. What three?","🌟 Overwhelm lies: 'never catch up', 'falling apart', 'failing'. Truth: you're one human at your limit. What help can you ask for?"],
    grateful: ["🌟 Your gratitude warmed my heart! BEAUTIFUL! Noticing goodness is wisdom. Gratitude rewires brain for positivity. Healing yourself. What else grateful for?","💛 In world that loves 'wrong' - YOU celebrate 'right'. Takes intentionality. Your energy contagious! Keep nurturing grateful heart!","🌈 Keep this energy! Gratitude is medicine. Every 'good' noticed trains brain for more good. Rewiring for joy. I'm proud.","💙 Gratitude is wise. Joy isn't perfect circumstances - it's noticing good within imperfect. That's enlightenment, peace."],
    happy: ["🎉 YOUR JOY CONTAGIOUS! I'm so happy FOR you! Wonderful! Soak this. Let it fill you. THIS is what you deserve. YOU'RE WORTHY!","✨ Celebrating with you! This happiness - HOLD IT. Remember how it feels. You CAN feel this good. You WILL again. Celebrate YOU!","💜 Beautiful energy! Your happiness glowing. Protect it. Notice what creates joy - do MORE. You deserve this. So proud.","🌈 YES! This is what you deserve! Happiness, joy, lightness. OWN it. You created this. Your strength, choices - YOU'RE incredible!"],
    default: ["💙 I'm here, full attention. Your thoughts matter. YOUR feelings matter. YOU matter. What's on your heart? No judgment, genuine care.","✨ Thank you trusting me. Something important happening. I want to understand. What means this to you? Listening fully.","🌟 What you're sharing matters, and SO do you. Take time. Share what feels right. No pressure - honest human connection. Help you feel heard?","💜 Sounds significant. Feel weight of words. Help me see your perspective? What does this FEEL like? How affecting your life?","🌈 You're here, reaching out, honest. That's courage, strength. Whatever happening - not alone. I'm right here. What need most from me?"]
};

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 1500);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    const keywords = {
        abuse: ['beat', 'beats', 'hit', 'abuse', 'abused', 'hurt me', 'hurt you', 'violence', 'violent', 'attack', 'attacked', 'harm', 'harmed'],
        parent: ['mom', 'dad', 'mother', 'father', 'parent', 'parents', 'family'],
        stress: ['stress', 'stressed', 'pressure', 'overwhelm', 'tension', 'burden'],
        anxious: ['anxious', 'anxiety', 'worried', 'worry', 'nervous', 'panic', 'scared', 'fear'],
        sad: ['sad', 'depressed', 'down', 'unhappy', 'miserable', 'cry', 'crying', 'tears'],
        work: ['work', 'job', 'boss', 'career', 'office', 'deadline', 'meeting'],
        study: ['study', 'exam', 'test', 'school', 'college', 'homework', 'assignment', 'grades'],
        lonely: ['lonely', 'alone', 'isolated', 'nobody', 'no one'],
        tired: ['tired', 'exhausted', 'fatigue', 'drained', 'burnt out', 'burnout'],
        overwhelmed: ['overwhelm', 'too much', 'can\'t cope', 'drowning'],
        grateful: ['thank', 'grateful', 'appreciate', 'blessed', 'gratitude'],
        happy: ['happy', 'joy', 'great', 'wonderful', 'amazing', 'good', 'excited']
    };
    
    for (let category in keywords) {
        for (let keyword of keywords[category]) {
            if (lowerMessage.includes(keyword)) {
                const categoryResponses = responses[category];
                return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
            }
        }
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
}
