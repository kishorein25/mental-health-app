const express = require('express');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON (minimal overhead)
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

// In-memory storage for demo purposes (fast startup)
let moodEntries = [];
let journalEntries = [];

// Allowed mood values
const VALID_MOODS = ['great', 'good', 'okay', 'bad', 'terrible'];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.post('/api/mood', (req, res) => {
  const { mood, note } = req.body;
  
  // Validate mood
  if (!mood || !VALID_MOODS.includes(mood)) {
    return res.status(400).json({ error: 'Invalid mood value' });
  }
  
  const entry = {
    id: crypto.randomUUID(),
    mood,
    note: note ? String(note).slice(0, 100) : '',
    timestamp: new Date().toISOString()
  };
  moodEntries.push(entry);
  res.json(entry);
});

app.get('/api/mood', (req, res) => {
  res.json(moodEntries.slice(-10)); // Return last 10 entries
});

app.post('/api/journal', (req, res) => {
  const { content } = req.body;
  
  // Validate content
  if (!content || typeof content !== 'string' || content.trim().length === 0) {
    return res.status(400).json({ error: 'Content is required' });
  }
  
  if (content.length > 10000) {
    return res.status(400).json({ error: 'Content too long (max 10000 characters)' });
  }
  
  const entry = {
    id: crypto.randomUUID(),
    content: content.slice(0, 10000),
    timestamp: new Date().toISOString()
  };
  journalEntries.push(entry);
  res.json(entry);
});

app.get('/api/journal', (req, res) => {
  res.json(journalEntries.slice(-10));
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Mental Health App running on http://localhost:${PORT}`);
  console.log(`⚡ Server started in ${process.uptime().toFixed(2)}s`);
});

module.exports = app;
