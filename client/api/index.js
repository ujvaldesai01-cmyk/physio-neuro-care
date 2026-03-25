const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const appointmentRoutes = require('./routes/appointments');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());

// Database Connection Caching for Serverless Functions
let isConnected;
const connectDB = async () => {
    if (isConnected) return;
    try {
        if (!process.env.MONGODB_URI) {
            console.log("⚠️ MONGODB_URI is not defined.");
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = db.connections[0].readyState;
        console.log('✅ MongoDB Connected (Serverless Cache)');
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err.message);
    }
};

// Ensure DB is connected before handling any requests
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/auth', authRoutes);

app.get('/api', (req, res) => {
    res.send('Physio Neuro Care API is running. Status: Healthy.');
});

// Export the app for Vercel Serverless
module.exports = app;
