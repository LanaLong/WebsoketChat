import './css/styles.css';
import io from 'socket.io-client';
// import { getCurrentDate } from '../src/js/getCurrentDate';

$(function () {
    var socket = io.connect('http://localhost:3000');

    $('form').submit(function (e) {
        e.preventDefault(); 
        socket.emit('chat message', $('#msg').val());
        $('#msg').val('');

        return false;
    });

    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
});