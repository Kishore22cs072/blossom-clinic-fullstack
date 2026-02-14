const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
    console.log('─'.repeat(60));
    console.log('New appointment request received →', new Date().toLocaleString());

    try {
        const { name, phone, email, date, message } = req.body;

        console.log('Received data:', req.body);

        // Very basic required field check
        if (!name || !phone || !email || !date) {
            return res.status(400).json({
                success: false,
                message: 'Name, phone, email and date are required'
            });
        }

        const newContact = new Contact({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim().toLowerCase(),
            date: new Date(date),
            message: message ? message.trim() : ''
        });

        const saved = await newContact.save();

        console.log('SUCCESS → saved with ID:', saved._id);
        console.log('─'.repeat(60));

        return res.status(201).json({
            success: true,
            message: 'Thank you! Your appointment request has been sent. We will contact you soon.'
        });
    } catch (err) {
        console.log('ERROR while saving appointment:');
        console.error(err.message);
        console.log('─'.repeat(60));

        return res.status(500).json({
            success: false,
            message: 'Error saving your request. Please try again.'
        });
    }
});

module.exports = router;