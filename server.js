const express = require('express');

const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(express.json());

//routers
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('Server functioning!');
})

module.exports = server;