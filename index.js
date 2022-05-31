// use micro framework express
const express = require('express');

// use cors 
const cors = require('cors');

// use axios
const axios = require('axios');

// use a data file
//const data = require('./data.json');

// use port 8000 to run server on localhost
const port = 8000;

// initialize express in a variable named app
const server = express();

// configure express to use urlencoded
server.use(express.urlencoded({
    extended: true
}));

// configure cors
server.use(cors('*'));

// default entry point '/' 
server.get('/', (req, res) => {
    res.json({ message : 'Welcome on Express/Node Server coucou Souad!ceci est un deuxieme test Fatiha'}).status(200);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
