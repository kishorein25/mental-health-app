# Mental Health Support App 🌟

A fast-loading, minimal mental health support application for mood tracking, journaling, and mindfulness exercises.

## ✨ Features

- **Mood Tracker**: Quick emotional check-ins with emoji-based mood logging
- **Quick Journal**: Write and save journal entries to process your thoughts
- **Breathing Exercise**: Guided breathing animation for stress relief
- **Fast Startup**: Optimized for quick loading and minimal resource usage

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0.0 or higher

### Installation & Running

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

The app should start in less than 1 second! ⚡

## 💡 Performance Optimizations

This application is optimized for fast startup:

- **Minimal dependencies**: Only Express.js for the backend
- **No build step required**: Vanilla JavaScript frontend
- **In-memory storage**: No database overhead for instant startup
- **Small bundle size**: ~10KB of frontend code
- **CSS animations**: Smooth, hardware-accelerated transitions
- **Lazy loading ready**: Architecture supports future enhancements

## 🛠️ Development

```bash
# Development mode (same as start for this minimal app)
npm run dev

# Run tests
npm test
```

## 📝 API Endpoints

- `GET /api/health` - Health check
- `POST /api/mood` - Save mood entry
- `GET /api/mood` - Get recent mood entries
- `POST /api/journal` - Save journal entry
- `GET /api/journal` - Get recent journal entries

## ⚠️ Note

This is a demo application using in-memory storage. Data will be lost when the server restarts. For production use, implement persistent storage.

## 📄 License

MIT