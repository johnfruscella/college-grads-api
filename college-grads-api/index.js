const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.use(express.json());








const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(process.env.DB_CONNECTION, options);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'))
port = process.env.Port||3000;
app.listen(port, () => console.log(`listening on ${port}...`));
