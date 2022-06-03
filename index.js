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
server.get('/', async (req, res) => {
    // res.json({ message : 'Welcome on Express/Node Server'}).status(200);
     const data = getGiftFromFlorajet();
     console.log(data)
     res.send(data).status(200);
 });
 
 server.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });
 
 
 const getGiftFromFlorajet = () => {
     const url = "https://www.florajet.com/categorie-1/chocolats.html";
     JSDOM.fromURL(url).then(dom => {
         const gifts = dom.window.document.querySelectorAll('article')
         const results = [];
         gifts.forEach(gift =>{
             const item = {};
             item.title = gift.querySelector("h2").textContent;
             item.img = gift.querySelector("img").src;
             item.price = gift.getElementsByClassName('price')[0].textContent;
             item.info = [];
             
           })
            
           results.info.push(item)
         })
 
         //console.log(results)
         return results;
     };
  
    
 /*const Chocolate = () => {
     const url = "https://lovingup.fr/categorie-produit/lovebox";
     JSDOM.fromURL(url).then(dom => {
         const box = dom.window.document.getElementById('8237').querySelectorAll()
         const results = [];
         box.forEach(box =>{
             const item = {};
             item.img = box.querySelector("img").src;
             item.price = box.querySelector('bdi').textContent;
             item.title = box.getElementsByClassName ("woocommerce-Price-amount amount").textContent;
             
             results.push(item)
         })
         console.log(results)
         return results;
     })
 } */
