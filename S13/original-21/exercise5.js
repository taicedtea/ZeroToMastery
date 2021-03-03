// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const importantStuff =[];
array.forEach((arr) => {
  importantStuff.push(arr.username + '!');
})
console.log('important', importantStuff)


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(name => name.username + '?');
console.log('mapped', mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(name => name.team === "red");
console.log('filtered', filterArray);

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, name) => {
  return acc + name.score;
}, 0);
console.log('total', totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const allUsers = array.map(user => { //creates fn cycling through array
  user.items = user.items.map(item => { //cycles thorguh .items in array, computes fn on each .item
    return item + '!' //adds ! to each item, adds to new item array
  });
   return user; 
})
console.log(allUsers)
