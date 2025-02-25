const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// فایلەکانی ستاتیک (HTML, CSS, JS)
app.use(express.static('public'));

// چات
io.on('connection', (socket) => {
    console.log('یەکێک پەیوەندی کرد!');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // ناردنی پەیام بۆ هەموو کڕیارەکان
    });

    socket.on('disconnect', () => {
        console.log('یەکێک جیا بوویەوە!');
    });
});

// گوێدان لە پۆرت 3000
server.listen(3000, () => {
    console.log('سێرڤەر کاردەکات لە http://localhost:3000');
});