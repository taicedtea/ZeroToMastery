var todos = [
    "clean room",
    "brush teeh",
    "eat",
    "tea",
    "eat more"
];

var todosImportant = [
    "clean room!",
    "brush teeh!",
    "eat!",
    "tea!",
    "eat more!"
];
var todosLength = todos.length;

// for (var i = 0; i < todosLength; i++) {
//     console.log(i); //will cycle through all todos
// }

function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10
// do { 
//     console.log(counterTwo); // will run fn before parameters are checked
//     counterTwo--;
// } while (counterTwo > 0);