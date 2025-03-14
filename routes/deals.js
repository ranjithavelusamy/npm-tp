const express = require('express');
const router = express.Router();
const data = require('../data/data');

// Main deals route
router.get('/', (req, res) => {
    res.render('deals', { title: 'deals', data: data.Deals });
});


// perfectdeals route
router.get('/perfectdeal', (req, res) => {
    res.render('perfectdeal', { title: 'perfectdeal', data: data.perfectdeal});
});

module.exports = router; 