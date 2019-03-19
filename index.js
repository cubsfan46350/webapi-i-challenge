// implement your API here
const express = require('express');

const db = require('./data/db.js'); 

const server = express();

var date = Date.now();

server.get('/', (req, res) => {
    res.send('Hello From Web XVII')
});

server.get('/now', (req, res) => {
    res.send(date.toString())
});

server.get('/hubs', (req, res) => {
    db.hubs
     .find()
     .then(hubs => {
         res.status(200).json(hubs);
     })
     .catch(error => {
         res.status(500).json({ message: 'error' })
     });
});

server.listen(4000, () => {
    console.log('\** API up and running on port 4000')
});