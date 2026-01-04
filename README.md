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

## ⚙️ DevOps & Infrastructure

This project utilizes a modern DevSecOps pipeline to ensure quality, security, and reliability.

| Area | Tool Used | Description |
| :--- | :--- | :--- |
| **CI/CD** | **GitHub Actions** | Automated workflows for building Docker images and running security scans on every push. |
| **Containerization** | **Docker** | Application packaged as a lightweight, portable container image. |
| **Registry** | **GHCR** | Docker images are published to the GitHub Container Registry. |
| **Orchestration** | **Kubernetes** | Deployment manifests (`k8s/`) defined for scalable orchestration. |
| **Security** | **CodeQL** | Automated semantic code analysis to detect vulnerabilities. |
| **Dependency Mgmt** | **Dependabot** | Automated monitoring for outdated or insecure npm/docker dependencies. |
| **Monitoring** | **GitHub Actions** | Build logs and workflow status checks for real-time feedback. |

---

## 📄 License
This project is licensed under the MIT License.

---
🧘 *Prioritize your peace. You matter.*