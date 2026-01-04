# 🌸 MindBloom - AI-Powered Mental Wellness Hub

MindBloom is a compassionate, state-of-the-art mental wellness platform designed to provide emotional support and relaxation through advanced AI and therapeutic tools.

**🌐 Live Application: [mindbloom-app.onrender.com](https://mindbloom-app.onrender.com)**

---

## ✨ Premium Features

*   🤖 **AI Companion** – Empathetic conversations powered by **Groq Llama 3**, providing high-speed, intelligent emotional support.
*   🎵 **Therapeutic Audio** – Curated binaural beats and calming frequencies for deep relaxation and focus.
*   🎮 **Mind Wellness Games** – Interactive exercises designed to ground you and reduce anxiety in real-time.
*   🧘 **Holistic Wellness** – Dedicated modules for Dance Therapy, Movie Recommendations, and Mood-based music playlists.

---

## 🚀 Getting Started

### Local Setup
```bash
# Clone the repository
git clone https://github.com/kishorein25/mental-health-app.git
cd mental-health-app

# Install dependencies
npm install

# Start the server
npm start
```
*Application will be available at `http://localhost:8001/`*

---

## ☁️ Deployment

MindBloom is optimized for deployment on **Render**.

1.  Connect your GitHub repository to [Render](https://render.com).
2.  Set the **Runtime** to `Node`.
3.  Set the **Build Command** to `npm install`.
4.  Set the **Start Command** to `node server.js`.
5.  **Environment Variables**: Ensure `GROQ_API_KEY` is set in the Render dashboard for the AI to function.

### GHCR token (packages access)

If you need to push/pull images from GitHub Container Registry, generate a Personal Access Token in your GitHub account with only:

* `read:packages`
* `write:packages`

Tokens are personal and cannot be stored or retrieved from this repository; keep yours private and export it locally, for example:

```bash
export GHCR_TOKEN=<YOUR_PERSONAL_ACCESS_TOKEN>
```

---

## 📁 Architecture

```text
mindbloom-app/
├── server.js           # Express.js Backend with AI Integration
├── public/
│   ├── chatbot.html    # AI Interface
│   ├── logic/          # Frontend logic (JS)
│   └── css/            # Premium Styling
```

---

## 🛠️ Tech Stack

*   **Frontend**: HTML5, Vanilla CSS3 (Custom Design), Modern JS
*   **Backend**: Node.js, Express.js
*   **AI Engine**: Groq (Llama 3.3 70B Versatile)
*   **API**: Axios for stable model communication

---

## 📄 License
This project is licensed under the MIT License.

---
🧘 *Prioritize your peace. You matter.*
