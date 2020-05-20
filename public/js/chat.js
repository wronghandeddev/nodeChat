// @ts-nocheck
const socket = io();

socket.on('message', (message) => {
    console.log(message)
});

document.querySelector('#message-form').addEventlistener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message

    socket.emit('sendMessage', message)
    
});

