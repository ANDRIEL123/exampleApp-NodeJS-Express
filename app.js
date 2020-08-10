var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/rota', (req, res) => {
    res.status(200).send({ response: 'hello world muchachos chuchu' });
});

module.exports = app