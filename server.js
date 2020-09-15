const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, res, next) => {
    console.log(`URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.get('*', (req, res, next) => {
    res.status(200).send("Sorry, can't find that.");
    next();
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
