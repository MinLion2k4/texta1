// This file contains the JSON data for the users
var usersDB = {
    "users": [
        {
            "username": "minh1",
            "password": "password1"
        },
        {
            "username": "minh2",
            "password": "password2"
        },
        {
            "username": "minh3",
            "password": "password3"
        }
    ]
};
console.log()
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;


    var found = false;    for (var i = 0; i < usersDB.users.length; i++) {
        if (username === usersDB.users[i].username && password === usersDB.users[i].password) {
            found = true;
            console.log(hople);
            break;
        }
    }
    
    if (found) {
        alert('Login successful! Redirecting to homepage...');
        window.location.href = 'index1.html';
    } else {
        alert('Invalid username or password. Please try again.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    
    return false;
}