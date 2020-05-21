const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');


//const nodemon = requireDev('nodemon');
const app = express();
const server = http.createServer(app);
const io = socketio(server);


const port = process.env.PORT || 8990
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
//    console.log('server is up on port ${port}');
io.on('connection', () => {
    console.log('new WebSocket connection');

    io.emit('message', 'Welcome');
    console.log('emitting message')
    io.on('sendMessage', (message) => {
        io.emit(message);
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});