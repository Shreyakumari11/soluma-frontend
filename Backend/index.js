const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = 5000;

// Middleware setup
app.use(cors()); 
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
    res.send('SOLUMA Backend Server is running successfully with CORS!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});