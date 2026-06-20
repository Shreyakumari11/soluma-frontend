const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 5000;

// API Key (Render ke Environment Variable mein 'GEMINI_API_KEY' set karein)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());

// AI se baat karne ka route
app.post('/api/ask', async (req, res) => {
    try {
        const { question } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(question);
        const response = await result.response;
        res.json({ answer: response.text() });
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "AI response failed" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));