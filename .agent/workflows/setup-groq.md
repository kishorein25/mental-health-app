---
description: Setup Groq AI for the chatbot
---

1. **Get your Groq API Key**
   - Visit [Groq Console](https://console.groq.com/keys)
   - Login and create a new API Key.
   - Copy the key (it starts with `gsk_`).

2. **Add to Environment Variables**
   - Open the `.env` file in your project root.
   - Add the following line:
     ```bash
     GROQ_API_KEY=your_groq_api_key_here
     ```
   - Save the file.

3. **Restart the Server**
   - If the server is running, stop it (Ctrl+C).
   - Run:
     ```bash
     npm run dev
     ```

4. **Test the Chatbot**
   - Open the chatbot page.
   - Send a message.
   - The response should be faster and powered by Llama 3 via Groq!
