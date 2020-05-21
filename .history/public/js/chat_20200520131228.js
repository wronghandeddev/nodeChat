// @ts-nocheck


const socket = io();


socket.on('message', (message) => {
    console.log(message);
});

let btnSend = document.querySelector("#message-send")
console.log("BTN:", btnSend)
btnSend.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("target:", e.target)
    const message = document.querySelector("#message-input").value

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
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared!')
        });
    });
});