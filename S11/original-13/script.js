var database = [
    {
        username: "Tai",
        password: "pass"
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

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("Sorry bitch");
    }
}
signIn(userNamePrompt, passwordPrompt);