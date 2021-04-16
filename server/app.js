const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/sasso', (req, res) =>{
    res.send("sasso");
})