// @ts-nocheck


const socket = io();


socket.on('message', (message) => {
    console.log(message);
});

document.querySelector('#message-form').addEventlistener('submit', (e) => {
    e.preventDefault();

    const message = e.target.elements.message.value;

    socket.emit('sendMessage', message, (error) => {
        if (error) {
            return console.log(error);
        }

        console.log('Message delivered!');
    });

});

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your bowser');
    }
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    });
});