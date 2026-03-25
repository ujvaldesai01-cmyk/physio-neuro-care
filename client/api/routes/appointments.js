const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// @route   POST /api/appointments
// @desc    Create a new appointment
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, phone, service, date, message } = req.body;

        const newAppointment = new Appointment({
            patientName: name,
            phone,
            service,
            date,
            message
        });

        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   GET /api/appointments
// @desc    Get all appointments
// @access  Private (TODO: Add Auth)
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ date: 1 });
        res.json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
