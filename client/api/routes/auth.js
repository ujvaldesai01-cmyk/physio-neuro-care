const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Hardcoded check for demo purposes if DB is empty
    // In a real app, we check DB and bcrypt compare
    if (username === 'admin' && password === 'admin123') {
        return res.json({ success: true, token: 'demo-token-123' });
    }

    res.status(401).json({ message: 'Invalid Credentials' });
});

module.exports = router;
