// use micro framework express
const express = require('express');

// use cors 
const cors = require('cors');

// use axios
const axios = require('axios');

// use a data file
const database = require('./database.json');

// use port 8000 to run server on localhost
const port = 8000;

// initialize express in a variable named server
const server = express();

// configure express to use urlencoded
server.use(express.urlencoded({
    extended: true
}));

// configure cors
server.use(cors('*'));

// default entry point '/' 
server.get('/', (req, res) => {
    res.json({ message : 'Welcome on Express/Node Server 😉'}).status(200);
});

//CRUD api
//get all items | read all items
server.get('/api/items', (req, res) => {
    res.json(database).status(200);
});

//get one items of profil | read one items of profil exemple id
server.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = database.find(profil => profil.id ===id);
    if (item) res.send(item).status(200);
    else res.send('Item not found').status(404);
});

//create new profil
server.post('/api/items', (req, res) => {
    if (!req.body.pseudo || !req.body.age || !req.body.genre || !req.body.region || !req.body.statut || !req.body.contact) {
        res.send('Missing fields 😮').status(400);
    } else {
        const item = {
            id: database.length + 1,
            pseudo: req.body.pseudo,
            age: req.body.age,
            genre: req.body.genre,
            region: req.body.region,
            statut: req.body.statut,
            contact: req.body.contact,
            photo: req.body.photo
        };
        database.push(item);
        res.send({message: "Profil successfully created! 😚 Love is waiting for you! 🥰", item: item}).status(201);
    }
});

// edit with PATCH
server.patch('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = database.find(profil => profil.id ===id);
    if (item) {
        if (req.body.pseudo) item.pseudo = req.body.pseudo;
        if (req.body.age) item.age = req.body.age;
        if (req.body.genre) item.genre = req.body.genre;
        if (req.body.region) item.region = req.body.region;
        if (req.body.statut) item.statut = req.body.statut;
        if (req.body.contact) item.contact = req.body.contact;
        if (req.body.photo) item.photo = req.body.photo
        res.send({message: "Profil successfully edited!😉 You can continue on the way of love 💖", item: item}).status(200);
    } else {
        res.send('Item not found 🤨').status(404);
    } 
});
    
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Delete item with DELETE
server.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = database.find(profil => profil.id ===id);
    if(item){
        database.splice(database.indexOf(item),1);
        res.send({message: "Item sucessfully deleted! 👌"}).status(200);
    } else res.send('Item not found 🤨').status(404);
});
