// Minimal, optimized JavaScript for fast page load
let breathingInterval = null;
let isBreathing = false;

// Mood tracking
async function trackMood(mood, emoji) {
    try {
        const response = await fetch('/api/mood', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mood, note: emoji })
        });
        
        const data = await response.json();
        const feedback = document.getElementById('mood-feedback');
        feedback.className = 'feedback success';
        feedback.textContent = `✓ Mood tracked: ${emoji} ${mood}`;
        
        // Load recent mood history
        loadMoodHistory();
    } catch (error) {
        console.error('Error tracking mood:', error);
        showError('mood-feedback', 'Failed to save mood');
    }
}

// Load mood history
async function loadMoodHistory() {
    try {
        const response = await fetch('/api/mood');
        const moods = await response.json();
        
        const historyEl = document.getElementById('mood-history');
        if (moods.length > 0) {
            historyEl.innerHTML = '<strong>Recent moods:</strong> ' + 
                moods.map(m => m.note).reverse().join(' ');
        }
    } catch (error) {
        console.error('Error loading mood history:', error);
    }
}

// Journal entry
async function saveJournal() {
    const input = document.getElementById('journal-input');
    const content = input.value.trim();
    
    if (!content) {
        showError('journal-feedback', 'Please write something first');
        return;
    }
    
    try {
        const response = await fetch('/api/journal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        
        const data = await response.json();
        const feedback = document.getElementById('journal-feedback');
        feedback.className = 'feedback success';
        feedback.textContent = '✓ Journal entry saved';
        
        input.value = '';
        
        // Clear feedback after 3 seconds
        setTimeout(() => {
            feedback.className = 'feedback';
            feedback.textContent = '';
        }, 3000);
    } catch (error) {
        console.error('Error saving journal:', error);
        showError('journal-feedback', 'Failed to save entry');
    }
}

// Breathing exercise
function toggleBreathing() {
    const btn = document.getElementById('breathing-btn');
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    
    if (isBreathing) {
        // Stop breathing
        clearInterval(breathingInterval);
        circle.className = 'breathing-circle';
        text.textContent = 'Click Start';
        btn.textContent = 'Start';
        isBreathing = false;
    } else {
        // Start breathing
        isBreathing = true;
        btn.textContent = 'Stop';
        breathe();
        breathingInterval = setInterval(breathe, 8000);
    }
}

let breathePhase = 0;
function breathe() {
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    
    if (breathePhase === 0) {
        // Inhale
        circle.className = 'breathing-circle inhale';
        text.textContent = 'Breathe In';
        breathePhase = 1;
    } else {
        // Exhale
        circle.className = 'breathing-circle exhale';
        text.textContent = 'Breathe Out';
        breathePhase = 0;
    }
}

// Helper function
function showError(elementId, message) {
    const el = document.getElementById(elementId);
    el.className = 'feedback';
    el.style.background = '#f8d7da';
    el.style.color = '#721c24';
    el.textContent = message;
}

// Load initial data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadMoodHistory();
    console.log('App loaded and ready!');
});
