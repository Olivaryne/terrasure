const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const listingRoutes = require('./routes/listings.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);

app.get('/', (req, res) => res.send('Real Estate App API running...'));

module.exports = app;
