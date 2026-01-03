// Enhanced Chatbot with Chat, Jokes, GK, and Quiz

// JOKES DATABASE
const jokes = [
    "Why did the programmer quit his job? Because he didn't get arrays! 😂",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
    "Why do Java developers wear glasses? Because they don't C#! 👓",
    "Why did the developer go broke? Because he used up all his cache! 💰",
    "What's a programmer's favorite hangout place? Foo Bar! 🍺",
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "How do you comfort a JavaScript bug? You console it! 🎮",
    "Why was the developer always calm? He had a lot of tolerance! 😌",
    "What did the array say to the function? You're making me loop endlessly! 🔁",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25! 🎃"
];

// GENERAL KNOWLEDGE FACTS
const gkFacts = [
    "🌍 The Earth is approximately 4.54 billion years old, formed in the Solar System.",
    "🧬 Human DNA is 99.9% identical to every other human - we're more alike than different!",
    "🚀 Light from the Sun takes about 8 minutes to reach Earth. You're looking at the Sun's past!",
    "🐘 Elephants are the only animals that mourn their dead with a ritual. They're incredibly intelligent!",
    "🧠 Your brain uses 20% of your body's energy despite being only 2% of body weight. Genius!",
    "🌊 The ocean covers 71% of Earth's surface, yet we've explored only 5% of it!",
    "⚡ Honey never spoils. Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible!",
    "🦖 Dinosaurs ruled Earth for 165 million years. Humans have been here for only 300,000 years!",
    "✨ A single bolt of lightning is 5 times hotter than the surface of the Sun!",
    "🐝 Honey bees can recognize human faces and communicate complex information through dance!"
];

// QUIZ QUESTIONS BY CATEGORY
const quizzes = {
    cricket: [
        {
            q: "In cricket, how many runs are awarded for hitting the ball out of the ground on the full?",
            opts: ["4 runs", "5 runs", "6 runs", "8 runs"],
            ans: 2
        },
        {
            q: "Who holds the record for most centuries in international cricket?",
            opts: ["Virat Kohli", "Sachin Tendulkar", "Kumar Sangakkara", "Ricky Ponting"],
            ans: 1
        },
        {
            q: "What is the width of the cricket bat allowed in cricket?",
            opts: ["3 inches", "4 inches", "4.25 inches", "5 inches"],
            ans: 2
        },
        {
            q: "In an ODI match, how many overs does each team bat?",
            opts: ["40 overs", "45 overs", "50 overs", "55 overs"],
            ans: 2
        },
        {
            q: "Which country won the first Cricket World Cup?",
            opts: ["India", "West Indies", "Australia", "Pakistan"],
            ans: 1
        },
        {
            q: "What is the LBW rule in cricket?",
            opts: ["Leg Before Wicket", "Legal Batting Width", "Long Ball Wicket", "Left Bat Wing"],
            ans: 0
        },
        {
            q: "How many fielders are allowed on the field in cricket?",
            opts: ["9", "10", "11", "12"],
            ans: 2
        },
        {
            q: "What is a hat-trick in cricket?",
            opts: ["3 boundaries in a row", "3 sixes in a row", "3 wickets in a row", "3 catches in a row"],
            ans: 2
        },
        {
            q: "What is the length of a cricket pitch?",
            opts: ["20 yards", "22 yards", "24 yards", "26 yards"],
            ans: 1
        },
        {
            q: "In T20 cricket, how many overs does each team bat?",
            opts: ["15 overs", "20 overs", "25 overs", "30 overs"],
            ans: 1
        }
    ],
    movies: [
        {
            q: "Which movie won the Academy Award for Best Picture in 2023?",
            opts: ["Barbie", "Oppenheimer", "Killers of the Flower Moon", "The Brutalist"],
            ans: 1
        },
        {
            q: "Who directed 'The Shawshank Redemption'?",
            opts: ["Steven Spielberg", "Frank Darabont", "Christopher Nolan", "Martin Scorsese"],
            ans: 1
        },
        {
            q: "Which is the highest-grossing movie of all time?",
            opts: ["Avatar: The Way of Water", "Avatar", "Avengers: Endgame", "Titanic"],
            ans: 0
        },
        {
            q: "In 'Inception', what object does Cobb use as his totem?",
            opts: ["A poker chip", "A spinning top", "A chess piece", "A dice"],
            ans: 1
        },
        {
            q: "How many Oscars did 'Titanic' win?",
            opts: ["11", "13", "15", "17"],
            ans: 1
        },
        {
            q: "Which movie introduced the character 'Joker' played by Heath Ledger?",
            opts: ["Batman Begins", "The Dark Knight", "The Dark Knight Rises", "Joker"],
            ans: 1
        },
        {
            q: "Who played Iron Man in the MCU?",
            opts: ["Tom Holland", "Robert Downey Jr", "Chris Evans", "Mark Ruffalo"],
            ans: 1
        },
        {
            q: "What is the main setting of 'The Matrix'?",
            opts: ["A virtual reality", "A computer system", "A dream world", "An alternate universe"],
            ans: 0
        },
        {
            q: "Which studio produced 'Spirited Away'?",
            opts: ["Studio Ghibli", "Toei Animation", "Madhouse", "A-1 Pictures"],
            ans: 0
        },
        {
            q: "In 'Forrest Gump', what is the name of Tom Hanks' character?",
            opts: ["George Gump", "Forrest Gump", "Frank Gump", "Fred Gump"],
            ans: 1
        }
    ],
    sports: [
        {
            q: "How many players are on a basketball team on the court?",
            opts: ["4", "5", "6", "7"],
            ans: 1
        },
        {
            q: "In football/soccer, how many players are in a team?",
            opts: ["9", "10", "11", "12"],
            ans: 2
        },
        {
            q: "What is the standard height of a basketball hoop?",
            opts: ["9 feet", "10 feet", "11 feet", "12 feet"],
            ans: 1
        },
        {
            q: "How many sets must a tennis player win to win a match?",
            opts: ["1", "2", "3", "Varies by format"],
            ans: 3
        },
        {
            q: "What is the maximum score in a game of bowling?",
            opts: ["200", "250", "300", "350"],
            ans: 2
        },
        {
            q: "How many holes are in a standard golf course?",
            opts: ["9", "12", "18", "27"],
            ans: 2
        },
        {
            q: "What is the standard weight of a football (soccer ball)?",
            opts: ["300-350g", "400-450g", "500-550g", "600-650g"],
            ans: 1
        },
        {
            q: "In badminton, how many points wins a match?",
            opts: ["11", "15", "21", "25"],
            ans: 2
        },
        {
            q: "What is the Olympic Games held every how many years?",
            opts: ["2 years", "3 years", "4 years", "5 years"],
            ans: 2
        },
        {
            q: "How many lanes are in an Olympic swimming pool?",
            opts: ["6", "8", "10", "12"],
            ans: 1
        }
    ],
    science: [
        {
            q: "What is the chemical symbol for Gold?",
            opts: ["Go", "Gd", "Au", "Ag"],
            ans: 2
        },
        {
            q: "Which planet is known as the Red Planet?",
            opts: ["Venus", "Mars", "Jupiter", "Saturn"],
            ans: 1
        },
        {
            q: "What is the hardest natural substance on Earth?",
            opts: ["Granite", "Diamond", "Steel", "Platinum"],
            ans: 1
        },
        {
            q: "What is the process by which plants make their own food?",
            opts: ["Photosynthesis", "Respiration", "Fermentation", "Oxidation"],
            ans: 0
        },
        {
            q: "What is the speed of light in vacuum?",
            opts: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
            ans: 0
        },
        {
            q: "How many bones are in the adult human body?",
            opts: ["186", "206", "226", "246"],
            ans: 1
        },
        {
            q: "What is the powerhouse of the cell?",
            opts: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
            ans: 1
        },
        {
            q: "What is the most abundant gas in Earth's atmosphere?",
            opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            ans: 2
        },
        {
            q: "Which element has the atomic number 1?",
            opts: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
            ans: 1
        },
        {
            q: "What is the SI unit of force?",
            opts: ["Joule", "Newton", "Watt", "Pascal"],
            ans: 1
        }
    ],
    history: [
        {
            q: "In which year did World War II end?",
            opts: ["1943", "1944", "1945", "1946"],
            ans: 2
        },
        {
            q: "Who was the first President of the United States?",
            opts: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
            ans: 1
        },
        {
            q: "Which ancient wonder of the world still stands today?",
            opts: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens", "Lighthouse of Alexandria"],
            ans: 1
        },
        {
            q: "In which year did the Titanic sink?",
            opts: ["1910", "1912", "1915", "1920"],
            ans: 1
        },
        {
            q: "Who painted the Mona Lisa?",
            opts: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
            ans: 1
        },
        {
            q: "Which civilization built the Great Wall of China?",
            opts: ["Han Dynasty", "Ming Dynasty", "Both", "Qin Dynasty"],
            ans: 2
        },
        {
            q: "In which year did India gain independence?",
            opts: ["1945", "1947", "1950", "1952"],
            ans: 1
        },
        {
            q: "Who discovered America in 1492?",
            opts: ["Amerigo Vespucci", "Christopher Columbus", "Leif Erikson", "John Cabot"],
            ans: 1
        },
        {
            q: "Which empire built the Taj Mahal?",
            opts: ["Mughal Empire", "Delhi Sultanate", "Mauryan Empire", "British Empire"],
            ans: 0
        },
        {
            q: "In which year did the Berlin Wall fall?",
            opts: ["1987", "1989", "1991", "1993"],
            ans: 1
        }
    ],
    geography: [
        {
            q: "Which is the largest country by area?",
            opts: ["Canada", "Russia", "USA", "China"],
            ans: 1
        },
        {
            q: "What is the capital of France?",
            opts: ["Lyon", "Paris", "Marseille", "Nice"],
            ans: 1
        },
        {
            q: "Which is the longest river in the world?",
            opts: ["Amazon", "Yangtze", "Nile", "Mississippi"],
            ans: 2
        },
        {
            q: "Which continent is the driest?",
            opts: ["Africa", "Australia", "Asia", "North America"],
            ans: 1
        },
        {
            q: "What is the capital of India?",
            opts: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
            ans: 1
        },
        {
            q: "Which mountain range is the tallest in the world?",
            opts: ["Alps", "Rockies", "Himalayas", "Andes"],
            ans: 2
        },
        {
            q: "What is the smallest country in the world?",
            opts: ["Monaco", "Vatican City", "Liechtenstein", "Malta"],
            ans: 1
        },
        {
            q: "Which ocean is the largest?",
            opts: ["Atlantic", "Indian", "Arctic", "Pacific"],
            ans: 3
        },
        {
            q: "What is the capital of Japan?",
            opts: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
            ans: 1
        },
        {
            q: "Which desert is the largest in the world?",
            opts: ["Sahara", "Arabian", "Gobi", "Kalahari"],
            ans: 0
        }
    ]
};

// EMOTION RESPONSES WITH MORE ATTRACTIVE ANSWERS
const emotionalResponses = {
    stress: [
        "💙 Stress is just your body's way of saying 'Hey, you care!' Channel that energy wisely. What's one thing you could delegate today?",
        "🌟 You're carrying weight, but here's the truth: YOU MATTER more than any deadline. Take a breath. You've got this! 💪",
        "✨ Stress talks lies - it says everything depends on you. Reality? You're one person doing your best. That's AMAZING! 🙌",
        "🔥 Pressure creates diamonds! You're stronger than you think. What's ONE thing you can let go of right now?"
    ],
    happy: [
        "🎉 YES! Your happiness is CONTAGIOUS! Keep this energy! You deserve every moment of joy! 🌈✨",
        "💛 This energy is POWERFUL! Don't let it fade - celebrate yourself! You're doing incredible! 🌟",
        "🎊 Pure joy! This is what you deserve! Hold onto it, remember it, LIVE it! You're amazing! 💫",
        "🌟 Your smile just brightened my entire existence! Keep spreading this joy! You're a STAR! ⭐"
    ],
    sad: [
        "💜 I see your pain, and it's VALID. But here's the truth: pain doesn't define you. You're so much more! What can I do?",
        "💙 Sadness means you FEEL deeply. That's your strength, not weakness. You're human. You matter. Always. 🤍",
        "🌙 This feeling will pass. Dark nights always turn into beautiful sunrises. You will see light again. I promise. ✨",
        "❤️ Your tears are PROOF you're alive, that you care, that you MATTER. This pain is temporary. You're strong. 💪"
    ],
    anxious: [
        "💙 That racing heart is your body PROTECTING you. Thank it! But right now? You're SAFE. Breathe. You've got this! 🧘",
        "✨ Anxiety lies! It says 'everything will go wrong'. Truth? You've handled hard things before. You CAN do this! 💪",
        "🌊 Feel the fear AND do it anyway! That's TRUE courage! You're braver than you believe! 🦁",
        "💜 One breath at a time. You're HERE. You're PRESENT. You're SAFE right now. Anxiety is just noise. You got this! 🎯"
    ]
};

// Global variables for quiz
let currentQuiz = [];
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;

// MODE SWITCHING
function switchMode(mode) {
    document.querySelectorAll('.mode-content').forEach(el => el.classList.remove('active'));
    document.getElementById(mode).classList.add('active');
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (mode === 'jokes') getJoke();
    if (mode === 'gk') getGK();
}

// CHAT MODE
function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addChatMessage(message, 'user');
    input.value = '';
    
    // Check for special commands
    const lower = message.toLowerCase();
    let response;

    if (lower.includes('joke')) {
        switchMode('jokes');
        return;
    } else if (lower.includes('quiz')) {
        switchMode('quiz');
        return;
    } else if (lower.includes('gk') || lower.includes('knowledge')) {
        switchMode('gk');
        return;
    }
    
    // Generate emotional response
    response = generateEmotionalResponse(message);
    
    setTimeout(() => {
        addChatMessage(response, 'bot');
    }, 1000);
}

function generateEmotionalResponse(message) {
    const lower = message.toLowerCase();
    const keywords = {
        stress: ['stress', 'pressure', 'deadline', 'busy', 'overwhelm', 'load'],
        happy: ['happy', 'joy', 'great', 'wonderful', 'amazing', 'love it', 'awesome'],
        sad: ['sad', 'down', 'depressed', 'hurt', 'cry', 'tears', 'miserable', 'unhappy'],
        anxious: ['anxious', 'nervous', 'worried', 'panic', 'fear', 'scared', 'anxiety']
    };

    for (let emotion in keywords) {
        for (let keyword of keywords[emotion]) {
            if (lower.includes(keyword)) {
                return emotionalResponses[emotion][Math.floor(Math.random() * emotionalResponses[emotion].length)];
            }
        }
    }

    // Default response
    return "That sounds important! Tell me more. I'm listening with my full heart. 💙";
}

function addChatMessage(text, sender) {
    const container = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    msgDiv.textContent = text;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

// JOKES
function getJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke-display').textContent = randomJoke;
}

// GENERAL KNOWLEDGE
function getGK() {
    const randomGK = gkFacts[Math.floor(Math.random() * gkFacts.length)];
    document.getElementById('gk-display').textContent = randomGK;
}

// QUIZ FUNCTIONS
function startQuiz(category) {
    currentQuiz = quizzes[category];
    currentQuestion = 0;
    correctAnswers = 0;
    answered = false;

    document.getElementById('category-select').style.display = 'none';
    document.getElementById('question-display').classList.add('active');
    
    showQuestion();
}

function showQuestion() {
    const q = currentQuiz[currentQuestion];
    document.getElementById('question-text').textContent = `${currentQuestion + 1}. ${q.q}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.opts.forEach((opt, index) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        optDiv.textContent = opt;
        optDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optDiv);
    });

    document.getElementById('feedback-message').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    answered = false;
}

function selectOption(index) {
    if (answered) return;
    answered = true;

    const q = currentQuiz[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    if (index === q.ans) {
        options[index].classList.add('correct');
        document.getElementById('feedback-message').innerHTML = '<div class="feedback correct">✅ Correct! Well done! 🎉</div>';
        correctAnswers++;
    } else {
        options[index].classList.add('incorrect');
        options[q.ans].classList.add('correct');
        document.getElementById('feedback-message').innerHTML = `<div class="feedback incorrect">❌ Wrong! The correct answer is: ${q.opts[q.ans]}</div>`;
    }

    updateStats();
    document.getElementById('next-btn').style.display = 'block';
}

function updateStats() {
    document.getElementById('current-q').textContent = `${currentQuestion + 1}/10`;
    document.getElementById('correct-count').textContent = correctAnswers;
    const percentage = Math.round((correctAnswers / (currentQuestion + 1)) * 100);
    document.getElementById('quiz-score').textContent = percentage + '%';
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < currentQuiz.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const percentage = Math.round((correctAnswers / currentQuiz.length) * 100);
    document.getElementById('options-container').innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h2 style="color: #667eea; font-size: 1.5rem;">Quiz Complete! 🎊</h2>
            <p style="font-size: 1.3rem; margin: 1rem 0;">Your Score: <strong>${correctAnswers}/10</strong></p>
            <p style="font-size: 1.1rem; color: #10b981;">${percentage}% Correct!</p>
            <p style="margin-top: 1rem; color: rgba(255,255,255,0.8);">
                ${percentage >= 80 ? '🌟 Outstanding! You\'re a genius!' : 
                  percentage >= 60 ? '👍 Great job! Keep learning!' : 
                  '💪 Good effort! Practice makes perfect!'}
            </p>
        </div>
    `;
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'block';
}

function restartQuiz() {
    document.getElementById('question-display').classList.remove('active');
    document.getElementById('category-select').style.display = 'block';
    document.getElementById('restart-btn').style.display = 'none';
}

// Initialize chat with welcome message
window.addEventListener('load', () => {
    addChatMessage("💙 Hey! I'm your AI companion. I can:\n✨ Chat with you emotionally\n😂 Tell you jokes\n🧠 Share general knowledge\n📚 Challenge you with quizzes!\n\nWhat would you like to do?", 'bot');
});

// Enter key support
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});
