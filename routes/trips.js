// const express = require('express');
// const router = express.Router();
// const data = require('../data/data');

// // Main trips route
// router.get('/', (req, res) => {
//     res.render('trips', { title: 'Trips', data: data.trips });
// });

// // Adventure trips route
// router.get('/adventuretrips', (req, res) => {
//     res.render('adventuretrips', { title: 'Adventure Trips', data: data.adventuretrips });
// });

// // Luxury trips route
// router.get('/luxurytrips', (req, res) => {
//     res.render('luxurytrips', { title: 'Luxury Trips', data: data.luxurytrips });
// });

// // Perfect trip details route (Fix: Use `router.get` instead of `app.get`)
// router.get('/perfecttrip', (req, res) => {
//     res.render('tripsDetail', { 
//         title: 'Perfect Trip Details', 
//         data: { content: 'Experience the best travel destinations with our carefully curated trips.' }
//     });
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const data = require('../data/data');

// Main trips route
router.get('/', (req, res) => {
    res.render('trips', { title: 'Trips', data: data.trips });
});

// Adventure trips route
router.get('/adventuretrips', (req, res) => {
    res.render('adventuretrips', { title: 'Adventure Trips', data: data.adventuretrips });
});

// Luxury trips route
router.get('/luxurytrips', (req, res) => {
    res.render('luxurytrips', { title: 'Luxury Trips', data: data.luxurytrips });
});


router.get('/perfecttrip', (req, res) => {
   
    res.render('tripsDetail', { 
        title: 'Perfect Trip Details', 
        data: { content: 'Experience the best travel destinations with our carefully curated trips.' }
    });
});

module.exports = router;

