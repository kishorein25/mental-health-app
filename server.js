const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON (minimal overhead)
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

// In-memory storage for demo purposes (fast startup)
let moodEntries = [];
let journalEntries = [];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.post('/api/mood', (req, res) => {
  const { mood, note } = req.body;
  const entry = {
    id: Date.now(),
    mood,
    note,
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
  const entry = {
    id: Date.now(),
    content,
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
