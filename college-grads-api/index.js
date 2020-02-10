const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//let databaseConnected = false;*************************************************
const homeRoute = require('./routes/home');

app.use('/', homeRoute)


const adminRoute = require('./routes/admin');

app.use('/admin', adminRoute)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(process.env.DB_CONNECTION, options);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'))

const port = process.env.Port||5000;
app.listen(port, () => console.log(`listening on ${port}...`));

//process.env.DB_CONNECTION