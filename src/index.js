// var fs = require('fs');
// import { getCurrentDate } from '../src/js/getCurrentDate';
import './css/styles.css';
import io from 'socket.io-client';

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

const avatar = document.querySelector('#avatar');
const imgLoad = document.querySelector('#imgLoad');

avatar.addEventListener('click', function() {
    imgLoad.style.display = 'block';
});
inputfile.addEventListener('focus', function () { inputfile.classList.add('has-focus'); });
inputfile.addEventListener('blur', function () { inputfile.classList.remove('has-focus'); });

var inputfile = document.querySelectorAll('#inputfile');

Array.prototype.forEach.call(inputs, function (input) {
    var label = inputfile.nextElementSibling,
        labelVal = label.innerHTML;

    inputfile.addEventListener('change', function (e) {
        var fileName = '';

    //     if (this.files & amp;& amp; this.files.length > 1 ) {
    //     fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    // } else {
        fileName = e.target.value.split('\\').pop();
    // }

    if (fileName) {
        label.querySelector('span').innerHTML = fileName;
    } else {
        label.innerHTML = labelVal;
    }
});
});

// smelukov File API
const fileReader = new FileReader();

inputfile.addEventListener('change', function (e) {
    const [file] = e.target.files;

    if(file) {
        if (file.size > 512 * 1024) {
            alert('Размер файла не может быть более 512 Kb');
        } else {
            fileReader.readAsDataURL(file);
        }
    }
});

fileReader.addEventListener('load', function() {
    avatar.src = fileReader.result;
})

// udate history
// socket.on("update messages", function (msg) {
//     var final_message = $("<p />").text(msg);
//     $("#history").append(final_message);
// });

// var app = require('http').createServer(response);
// var fs = require('fs');
// var io = require('socket.io')(app);

// app.listen(3000);
// console.log("App running...");

// function response(req, res) {
//     var file = "";
//     if (req.url == "/") {
//         file = __dirname + '/index.html';
//     } else {
//         file = __dirname + req.url;
//     }

//     fs.readFile(file,
//         function (err, data) {
//             if (err) {
//                 res.writeHead(404);
//                 return res.end('Page or file not found');
//             }

//             res.writeHead(200);
//             res.end(data);
//         }
//     );
// }

// io.on("connection", function (socket) {
//     socket.on("send message", function (sent_msg, callback) {
//         sent_msg = "[ " + getCurrentDate() + " ]: " + sent_msg;

//         io.sockets.emit("update messages", sent_msg);
//         callback();
//     });
// });