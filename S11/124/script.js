var database = [
    {
        username: "Tai",
        password: "pass"
    },
    {
        username: "Sally",
        password: "123"
    }, {
        username: "Bob",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "name",
        timeline: "learning shit"
    }, {
        username: "name2",
        timeline: "learning more shti"
    }, {
        username: "name3",
        timeline: "i want ass in my face"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    // console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry bitch");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);