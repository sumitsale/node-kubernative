const express = require('express');
const pingController = require('./controllers/PingController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', pingController);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Node Kubernative!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
