// Game switching functionality
function switchGame(gameId) {
    // Hide all games
    document.querySelectorAll('.game-container').forEach(container => {
        container.classList.remove('active');
    });
    
    // Remove active state from all tabs
    document.querySelectorAll('.game-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected game
    document.getElementById(gameId).classList.add('active');
    
    // Activate corresponding tab
    event.target.classList.add('active');
}

// ============= MEMORY GAME =============
let cards = [];
let flippedCards = [];
let score = 0;
let matches = 0;

const memoryEmojis = ['🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '🍀', '🌿'];
const memoryEncouragements = [
    '✨ Beautiful! You\'re doing amazing!',
    '💫 Well done! Keep that focus!',
    '🌟 Wonderful! You\'re on fire!',
    '💝 Excellent work! You\'re so thoughtful!',
    '🎉 Amazing! This is wonderful!',
    '🌈 Fantastic! You\'re incredible!'
];

function startMemoryGame() {
    score = 0;
    matches = 0;
    document.getElementById('memory-score').textContent = 'Let\'s begin! You\'ve got this 💪';
    const gameContainer = document.getElementById('memory-game');
    gameContainer.innerHTML = '';
    
    cards = [...memoryEmojis, ...memoryEmojis].sort(() => Math.random() - 0.5);
    
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.textContent = '?';
        card.onclick = () => flipCard(card);
        gameContainer.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains('flipped')) return;
    
    card.textContent = card.dataset.emoji;
    card.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.emoji === card2.dataset.emoji) {
        score += 10;
        matches++;
        const encouragement = memoryEncouragements[Math.floor(Math.random() * memoryEncouragements.length)];
        const totalPairs = memoryEmojis.length;
        
        if (matches === totalPairs) {
            document.getElementById('memory-score').textContent = `🎊 PERFECT! You completed it with ${score} points! You're absolutely amazing! 🌟💜`;
        } else {
            document.getElementById('memory-score').textContent = `${encouragement} | Score: ${score} | ${matches}/${totalPairs} pairs`;
        }
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        document.getElementById('memory-score').textContent = `💚 Keep going! You're doing great! | Score: ${score}`;
    }
    
    flippedCards = [];
}

// ============= PUZZLE GAME =============
let puzzleCards = [];
let puzzleFlipped = [];
let puzzleMatches = 0;

const puzzleEmojis = ['😊', '🌟', '💪', '🧘', '💖', '🌍', '🎵', '✨', '🌊'];

function startPuzzleGame() {
    puzzleMatches = 0;
    document.getElementById('puzzle-score').textContent = 'You\'re creating harmony! 🌈';
    const gameContainer = document.getElementById('puzzle-game');
    gameContainer.innerHTML = '';
    
    puzzleCards = [...puzzleEmojis, ...puzzleEmojis].sort(() => Math.random() - 0.5);
    
    puzzleCards.forEach((emoji, index) => {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.dataset.emoji = emoji;
        piece.dataset.index = index;
        piece.textContent = '?';
        piece.onclick = () => flipPuzzle(piece);
        gameContainer.appendChild(piece);
    });
}

function flipPuzzle(piece) {
    if (puzzleFlipped.length >= 2 || piece.classList.contains('solved')) return;
    
    piece.textContent = piece.dataset.emoji;
    puzzleFlipped.push(piece);
    
    if (puzzleFlipped.length === 2) {
        setTimeout(checkPuzzleMatch, 1000);
    }
}

function checkPuzzleMatch() {
    const [piece1, piece2] = puzzleFlipped;
    
    if (piece1.dataset.emoji === piece2.dataset.emoji) {
        piece1.classList.add('solved');
        piece2.classList.add('solved');
        puzzleMatches++;
        const totalPairs = puzzleEmojis.length;
        
        if (puzzleMatches === totalPairs) {
            document.getElementById('puzzle-score').textContent = `🎊 YOU\'RE A HARMONY MASTER! Peace puzzle complete! 💜✨`;
        } else {
            document.getElementById('puzzle-score').textContent = `🌟 Harmonies aligned! ${puzzleMatches}/${totalPairs} complete!`;
        }
    } else {
        piece1.textContent = '?';
        piece2.textContent = '?';
        document.getElementById('puzzle-score').textContent = `💚 Keep searching for harmony! You\'re almost there!`;
    }
    
    puzzleFlipped = [];
}

// ============= WELLNESS QUIZ =============
const quizQuestions = [
    {
        question: 'How long should a typical meditation session be for beginners?',
        options: ['1-5 minutes', '30+ minutes', 'It doesn\'t matter', 'Only at bedtime'],
        correct: 0,
        explanation: '✨ Even 1-5 minutes of meditation can reduce stress! Start small and build up. Your brain loves consistency!'
    },
    {
        question: 'What is the best time to practice deep breathing?',
        options: ['Only when stressed', 'Anytime, regularly', 'Only in morning', 'Only before sleep'],
        correct: 1,
        explanation: '💙 Deep breathing works best as a daily practice! When you practice regularly, you\'re calmer when stress hits.'
    },
    {
        question: 'How much sleep do adults typically need?',
        options: ['4-5 hours', '7-9 hours', '12+ hours', 'It varies by person'],
        correct: 1,
        explanation: '😴 7-9 hours is ideal for most adults! Quality sleep is your body\'s way of healing and recharging. Respect it!'
    },
    {
        question: 'What\'s a sign that you need a mental health break?',
        options: ['Constant fatigue', 'Difficulty focusing', 'Feeling overwhelmed', 'All of the above'],
        correct: 3,
        explanation: '💚 All are signs you need rest! Listen to your body. Taking breaks isn\'t weakness - it\'s wisdom.'
    },
    {
        question: 'Which is most effective for managing anxiety?',
        options: ['Ignoring it', 'Deep breathing & movement', 'Caffeine', 'Staying busy'],
        correct: 1,
        explanation: '🌟 Deep breathing and gentle movement work! They activate your parasympathetic nervous system (your calm system).'
    }
];

let currentQuestion = 0;
let quizScore = 0;

function startQuiz() {
    currentQuestion = 0;
    quizScore = 0;
    displayQuizQuestion();
}

function displayQuizQuestion() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';
    
    if (currentQuestion >= quizQuestions.length) {
        quizContent.innerHTML = `
            <div class="status-message" style="margin-top: 2rem; font-size: 1.3rem;">
                🎉 QUIZ COMPLETE! 🎉<br><br>
                You got ${quizScore}/${quizQuestions.length} questions right!<br>
                <span style="font-size: 1.1rem; opacity: 0.95;">You're amazing at understanding wellness! 💜✨</span>
            </div>
            <button onclick="startQuiz()" style="margin-top: 2rem;">Try Again 🔄</button>
        `;
        return;
    }
    
    const question = quizQuestions[currentQuestion];
    let optionsHTML = '';
    
    question.options.forEach((option, index) => {
        optionsHTML += `
            <div class="quiz-option" onclick="answerQuizQuestion(${index})">
                ${option}
            </div>
        `;
    });
    
    quizContent.innerHTML = `
        <div style="margin: 2rem 0;">
            <div style="font-size: 1.2rem; margin-bottom: 1.5rem; font-weight: 500;">
                Question ${currentQuestion + 1}/${quizQuestions.length}
            </div>
            <h3 style="font-size: 1.3rem; margin-bottom: 2rem;">${question.question}</h3>
            <div class="quiz-options">
                ${optionsHTML}
            </div>
        </div>
    `;
}

function answerQuizQuestion(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const quizContent = document.getElementById('quiz-content');
    
    if (selectedIndex === question.correct) {
        quizScore++;
        quizContent.innerHTML = `
            <div class="status-message" style="margin-top: 2rem; color: #4CAF50;">
                ✅ CORRECT! 
            </div>
            <div style="background: rgba(76, 175, 80, 0.2); padding: 1.5rem; border-radius: 15px; margin: 1.5rem 0; font-size: 1.1rem;">
                ${question.explanation}
            </div>
            <button onclick="nextQuizQuestion()" style="margin-top: 1rem;">Continue 🌟</button>
        `;
    } else {
        quizContent.innerHTML = `
            <div class="status-message" style="margin-top: 2rem;">
                💭 Good try! The answer was: <strong>${question.options[question.correct]}</strong>
            </div>
            <div style="background: rgba(102, 126, 234, 0.2); padding: 1.5rem; border-radius: 15px; margin: 1.5rem 0; font-size: 1.1rem;">
                ${question.explanation}
            </div>
            <button onclick="nextQuizQuestion()" style="margin-top: 1rem;">Continue Learning 📚</button>
        `;
    }
}

function nextQuizQuestion() {
    currentQuestion++;
    displayQuizQuestion();
}

// ============= STRESS RELIEF POPPER =============
let bubbles = [];

function startStressRelief() {
    const gameContainer = document.getElementById('stress-game');
    gameContainer.innerHTML = '';
    document.getElementById('stress-score').textContent = 'Pop as many as you want! 😄 Your stress doesn\'t control you!';
    
    // Create 9 bubbles
    for (let i = 0; i < 9; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'stress-relief-bubble';
        bubble.textContent = '🎈';
        bubble.onclick = (e) => popBubble(bubble, e);
        gameContainer.appendChild(bubble);
    }
}

function popBubble(bubble, event) {
    if (bubble.style.opacity !== '0') {
        const messages = [
            '💨 Released! You got this!',
            '🎊 Gone! Feel lighter!',
            '✨ Freed! You\'re strong!',
            '💪 Popped! Keep going!',
            '🌟 Released! You\'re powerful!',
            '💙 Gone! Breathe easy!'
        ];
        
        document.getElementById('stress-score').textContent = messages[Math.floor(Math.random() * messages.length)];
        bubble.style.pointerEvents = 'none';
        bubble.style.opacity = '0';
    }
}
