const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(express.json())
server.use(bodyParser.json());
server.use(routes);
server.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
});

server.listen(3000, () => {
    console.log('Server is runing!')
})