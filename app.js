require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routers
const tripsRouter = require('./routes/trips');
const dealsRouter = require('./routes/deals');

// Use routers
app.use('/trips', tripsRouter);
app.use('/deals', dealsRouter);

// Home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;