require('dotenv').config();
require('./src/config/aws-config');
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes');

const app = express();
app.use(express.json());
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
