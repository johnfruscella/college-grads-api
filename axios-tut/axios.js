const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());


const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://regress.in/api/users').then(response => {
        console.log(response)
    });
};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);