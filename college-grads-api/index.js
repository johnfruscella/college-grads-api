const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let databaseConnected = false;
const homeRoute = require('./routes/home');

app.use('/', data_base_condition, homeRoute)


const adminRoute = require('./routes/admin');

app.use('/admin', data_base_condition, adminRoute)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(process.env.DB_CONNECTION, options);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'))
//LOCAL PORT THAT SERVER IS HOSTED ON
const port = process.env.Port||3000;
app.listen(port, () => console.log(`listening on ${port}...`));

function data_base_condition(req, res, next) {
    if (databaseConnected === true) {
        next()
    } else {
        res.status(500).json({message: "Server not connected to database"})
    }
}