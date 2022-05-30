// use micro framework express
const express = require('express');

// use axios
const axios = require('axios');

// use a data file
const data = require('./data.json');

// use port 8000 to run server on localhost
const port = 8000;

// initialize express in a variable named app
const app = express();

// configure express to use urlencoded
app.use(express.urlencoded({
    extended: true
}));

// log server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});