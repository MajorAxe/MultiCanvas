var  express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log('MultiCanvas server is on');

var socket = require('socket.io');
var io = socket(server);

io.on('connection', function (socket) {
    socket.on('mouse', function (data) {
        socket.broadcast.emit('mouse', data);
    });
});