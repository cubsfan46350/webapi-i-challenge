// implement your API here
const express = require('express');

const server = express();

server.listen(4000, () => {
    console.log('\** API up and running on port 4000')
});