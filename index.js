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


/*app.post("/api/items", (req, res) => {
   if (!req.body.name || !req.body.planet || !req.body.force ||!req.body.species){
       res.send("Missing fields").status(404);
   } else {
   const item = {
       id: data.length + 1,
       name: req.body.name,
       planet: req.body.planet,
       force: req.body.force,
       species: req.body.species
   };
   data.push(item);
   res.send ({message:"item successfully created", item: item}).status(200);
   }
});
app.patch("/api/items/:id", (req, res) => {
   const id = req.params.id;
   const item = data.find(element => element.id == id);
   if(item){
       if (req.body.name) item.name= req.body.name;
       if (req.body.planet) item.planet = req.body.planet;
       if (req.body.force) item.force = req.body.force;
       if (req.body.species) item.species = req.body.species;
       res.send ({message:"item successfully edited", item: item}).status(200);
   } else {
       res.send("Item not found").status(404);
   }
});
app.delete("/api/items/:id", (req, res) => {
   const id = req.params.id;
   const item = data.find(element => element.id == id);
   if(item){
       data.splice(data.indexOf(item), 1);
       res.send ({message:"item successfully deleted", item: item}).status(200);
   } else {
       res.send("Item not found").status(404);
   }
});
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});*/

































// default entry point '/' 
/*server.get('/', async (req, res) => {
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
    };*/  
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



