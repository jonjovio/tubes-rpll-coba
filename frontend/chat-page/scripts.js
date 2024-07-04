document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const menuItem = document.getElementById('menu-items');
    const userProfile = document.getElementById('user-profile');
    const dropdownContent = document.getElementById('dropdown-content');
    const logoutButton = document.getElementById('logout-button');
    const popup = document.getElementById('popup');
    const cancelButton = document.getElementById('cancel-button');
    const confirmButton = document.getElementById('confirm-button');

    menuButton.addEventListener('click', function () {
        sidebar.classList.toggle('closed');
        menuItem.classList.toggle('closed');
        userProfile.classList.toggle('closed');
        menuButton.classList.toggle('closed');
    });

    userProfile.addEventListener('click', function () {
        userProfile.classList.toggle('show');
    });

    logoutButton.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    cancelButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    confirmButton.addEventListener('click', function () {
        // Add your logout logic here
        alert('Logged out!');
        popup.style.display = 'none';
    });


    login();
    

});

document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        appendMessage('user', message);
        userInput.value = '';

        // Simulate bot response (replace with actual AJAX/WebSocket call)
        setTimeout(() => {
            const botMessage = getBotResponse(message);
            appendMessage('bot', botMessage);
        }, 1000);
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const profilePic = sender === 'user' ? '..\img\male.png' : '..\img\dog.png';

    if (sender == 'bot') {
        messageElement.innerHTML = `
            <img src="${profilePic}" alt="${sender}">
            <div class="content">${message}</div>
        `;
    } else {
        messageElement.innerHTML = `
            <div class="content">${message}</div>
            <img src="${profilePic}" alt="${sender}">
        `;
    }

    

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Placeholder for actual bot response logic
    return "This is a bot response.";
}

/*
function loadChatItems() {
    console.log('Fetching chat items...');
    fetch('https://839d-34-83-4-55.ngrok-free.app/api/chats', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(response => {
        console.log('Chats response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            console.error('Error loading chats:', data.error);
            return;
        }

        console.log('Chats data:', data);
        const chats = data.chats;
        const menuItemsContainer = document.getElementById('menu-items');

        chats.forEach(chat => {
            const chatButton = document.createElement('button');
            chatButton.classList.add('menu-item');
            chatButton.textContent = chat.firstPrompt || 'Untitled Chat';
            chatButton.dataset.chatId = chat.chatId;

            chatButton.addEventListener('click', function () {
                loadChatHistory(chat.chatId);
            });

            menuItemsContainer.appendChild(chatButton);
        });
    })
    .catch(error => {
        console.error('Error fetching chats:', error);
        fetch('https://839d-34-83-4-55.ngrok-free.app/api/chats', {  // Pastikan URL ngrok yang benar
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(response => response.text())
        .then(text => console.log('Server response:', text))
        .catch(error => console.error('Error fetching response text:', error));
    });
}

function loadChatHistory(chatId) {
    // Implement the function to load chat history based on chatId
    console.log('Loading chat history for chatId:', chatId);
}


function login() {
    const loginData = {
        email: "evan@gmail.com",
        password: "1234"
    };

    fetch('https://839d-34-83-4-55.ngrok-free.app/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            console.error('Login error:', data.error);
            return;
        }

        // Save token or session information here if needed
        console.log('Login successful:', data);

        loadChatItems();
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
}

*/