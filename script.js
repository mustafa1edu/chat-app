const socket = io(); // پەیوەندی بە سێرڤەرەوە

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const username = document.getElementById('username');

// ناردنی پەیام
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.emit('chat message', message); // ناردنی پەیام بۆ سێرڤەر
        messageInput.value = ''; // پاککردنەوەی خانەی پەیام
    }
});

// وەرگرتنی پەیام
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'received');
    messageElement.innerHTML = `<p>${msg}</p>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // هەموو کات خوارەوە بڕۆ
});