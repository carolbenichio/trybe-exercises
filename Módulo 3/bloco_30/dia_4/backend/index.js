const express = require('express');
const http = require('http');
const socket = require('socket.io');
const socketListen = require('./socket')

const app = express();

const server = http.createServer(app);

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

socketListen(io);

server.listen(3001, () => console.log('Ouvindo na porta 3001'));