// controllers/PingController.js
const express = require('express');
const router = express.Router();

// Ping route
router.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Pong', timestamp: new Date() });
});

module.exports = router;

