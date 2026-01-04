---
description: How to Deploy MindBloom to Render.com (Free 24/7 Hosting)
---

Since your app now uses a smart AI backend, it needs a "Node.js Web Service" instead of a static site.
**Render.com** is the best free place for this.

### Step 1: Push Changes to GitHub
1. Open your terminal or Source Control tab.
2. Commit all your changes: `git add .` then `git commit -m "Add Gemini AI"`
3. Push to GitHub: `git push origin main`

### Step 2: Create a Render Account
1. Go to [https://render.com/](https://render.com/)
2. Click **"Get Started for Free"**.
3. Sign up using your **GitHub** account.

### Step 3: Create a New Web Service
1. In the Render Dashboard, click the **"New +"** button.
2. Select **"Web Service"**.
3. You will see a list of your GitHub repos. Find `mental-health-app` and click **"Connect"**.

### Step 4: Configure the Service
Render will automatically detect most settings, but double-check these:
*   **Name:** `mindbloom-app` (or whatever you like)
*   **Region:** Choose the one closest to you (e.g., Singapore or Frankfurt).
*   **Branch:** `main`
*   **Runtime:** `Node`
*   **Build Command:** `npm install`
*   **Start Command:** `node server.js`
*   **Instance Type:** Select **"Free"**.

### Step 5: Add Your API Key (CRITICAL)
1. Scroll down to the **"Environment Variables"** section.
2. Click **"Add Environment Variable"**.
3. **Key:** `GEMINI_API_KEY`
4. **Value:** Paste your API Key from Google AI Studio here.
5. Click **"Add Environment Variable"** again.
6. **Key:** `GROQ_API_KEY` (Optional but recommended for speed)
7. **Value:** Paste your Groq API Key.
   *(Get one at: https://console.groq.com/keys)*

### Step 6: Deploy!
1. Click **"Create Web Service"**.
2. Render will start building your app. It might take 2-3 minutes.
3. Once it says "Live", click the URL at the top (e.g., `https://mindbloom-app.onrender.com`).

**🎉 Your AI Mental Health App is now live 24/7 for free!**
