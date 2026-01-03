let audioContext;
let oscillator1, oscillator2, gainNode;
let isPlaying = false;
let currentBeat = null;

const beatFrequencies = {
    delta: { left: 200, right: 202, name: 'Delta Waves' },
    theta: { left: 200, right: 206, name: 'Theta Waves' },
    alpha: { left: 200, right: 211, name: 'Alpha Waves' },
    beta: { left: 200, right: 220, name: 'Beta Waves' }
};

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playBeat(beatType) {
    stopAudio();
    currentBeat = beatType;
    document.getElementById('current-beat').textContent = 
        `Playing: ${beatFrequencies[beatType].name}`;
    
    initAudioContext();
    
    oscillator1 = audioContext.createOscillator();
    oscillator2 = audioContext.createOscillator();
    gainNode = audioContext.createGain();
    
    const merger = audioContext.createChannelMerger(2);
    
    oscillator1.frequency.value = beatFrequencies[beatType].left;
    oscillator2.frequency.value = beatFrequencies[beatType].right;
    
    gainNode.gain.value = parseFloat(document.getElementById('volume').value);
    
    oscillator1.connect(merger, 0, 0);
    oscillator2.connect(merger, 0, 1);
    merger.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator1.start();
    oscillator2.start();
    
    isPlaying = true;
    document.getElementById('play-btn').textContent = '⏸ Pause';
}

function togglePlay() {
    if (!currentBeat) {
        alert('Please select a frequency first');
        return;
    }
    
    if (isPlaying) {
        stopAudio();
    } else {
        playBeat(currentBeat);
    }
}

function stopAudio() {
    if (oscillator1) oscillator1.stop();
    if (oscillator2) oscillator2.stop();
    isPlaying = false;
    document.getElementById('play-btn').textContent = '▶ Play';
}

document.getElementById('volume').addEventListener('input', function(e) {
    if (gainNode) {
        gainNode.gain.value = parseFloat(e.target.value);
    }
});
