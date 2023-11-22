const express = require('express');
const socketio = require('socket.io');

const app = express();

app.get('/', (req, res) => {
    res.send('Server is Up!')
});

const server = app.listen(1337, () => {
    console.log('Server running!')
});

const io = socketio(server)

io.on('connection', (socket) => {
    console.log(`New connection test: ${socket.id}`)

    socket.on('input', (data) => {
        console.log(`New message from ${socket.id}: ${data}`)
        socket.emit('output', data)
    })
})