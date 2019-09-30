const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('../src/routes/userRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from TDD node!'});
});
app.use(userRoutes);

module.exports = app;