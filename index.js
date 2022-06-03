// use micro framework express
const express = require('express');

// use cors 
const cors = require('cors');

// use axios
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

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
server.get('/api/getGiftFromFlorajet', async (req, res) => {
    try {
        const url = "https://www.florajet.com/categorie-1/chocolats.html";
        axios.get(url).then(response =>{
            JSDOM.fromURL(url).then(dom => {
            const etGiftFromFlorajet = dom.window.document.querySelectorAll('article');
            //console.log (starwarsCards);
            const items = [];
            etGiftFromFlorajet.forEach(gifts => {
                const objet = {
                    price: gifts.getElementsByClassName('price')[0].textContent,
                    title: gifts.querySelector("h2").textContent,
                    img:  gifts.querySelector("img").src,
                }
            
                console.log(objet);
                items.push(objet);
            });
                res.send(items).status(200);
    })});
    }
    catch (error) {
        console.log(error);
    }
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 });


