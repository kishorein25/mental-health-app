// Simple test script to verify the application works
const http = require('http');

// Helper function to make HTTP requests
function makeRequest(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          body: JSON.parse(body)
        });
      });
    });
    req.on('error', reject);
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function runTests() {
  console.log('🧪 Running tests...\n');
  
  let passed = 0;
  let failed = 0;
  
  // Start the server
  const app = require('./server.js');
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    // Test 1: Health check
    console.log('Test 1: Health check');
    const health = await makeRequest({
      hostname: 'localhost',
      port: 3000,
      path: '/api/health',
      method: 'GET'
    });
    if (health.statusCode === 200 && health.body.status === 'ok') {
      console.log('✓ Health check passed\n');
      passed++;
    } else {
      console.log('✗ Health check failed\n');
      failed++;
    }
    
    // Test 2: Valid mood entry
    console.log('Test 2: Valid mood entry');
    const mood = await makeRequest({
      hostname: 'localhost',
      port: 3000,
      path: '/api/mood',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, { mood: 'great', note: '😊' });
    if (mood.statusCode === 200 && mood.body.mood === 'great') {
      console.log('✓ Valid mood entry passed\n');
      passed++;
    } else {
      console.log('✗ Valid mood entry failed\n');
      failed++;
    }
    
    // Test 3: Invalid mood entry
    console.log('Test 3: Invalid mood entry');
    const invalidMood = await makeRequest({
      hostname: 'localhost',
      port: 3000,
      path: '/api/mood',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, { mood: 'invalid' });
    if (invalidMood.statusCode === 400 && invalidMood.body.error) {
      console.log('✓ Invalid mood validation passed\n');
      passed++;
    } else {
      console.log('✗ Invalid mood validation failed\n');
      failed++;
    }
    
    // Test 4: Valid journal entry
    console.log('Test 4: Valid journal entry');
    const journal = await makeRequest({
      hostname: 'localhost',
      port: 3000,
      path: '/api/journal',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, { content: 'Test journal entry' });
    if (journal.statusCode === 200 && journal.body.content === 'Test journal entry') {
      console.log('✓ Valid journal entry passed\n');
      passed++;
    } else {
      console.log('✗ Valid journal entry failed\n');
      failed++;
    }
    
    // Test 5: Empty journal entry
    console.log('Test 5: Empty journal entry validation');
    const emptyJournal = await makeRequest({
      hostname: 'localhost',
      port: 3000,
      path: '/api/journal',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, { content: '' });
    if (emptyJournal.statusCode === 400 && emptyJournal.body.error) {
      console.log('✓ Empty journal validation passed\n');
      passed++;
    } else {
      console.log('✗ Empty journal validation failed\n');
      failed++;
    }
    
    console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
    
    process.exit(failed > 0 ? 1 : 0);
  } catch (error) {
    console.error('❌ Test error:', error);
    process.exit(1);
  }
}

runTests();
