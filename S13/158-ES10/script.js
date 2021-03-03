const array = [1,[2,3],[4,5]];
array.flat(); //creates new array with no nested arrays, "flattned
// would output [1, 2. 3. 4. 5];

const array3 = [1,2,[3,4,[5]]]
array3.flat() //would output [1, 2, 3, 4 [5]], default array layer depth is 1

array3.flat(2) //would flatten all, [1,2,3,4,5];

const entries = ['bob', 'steve',,,,, 'fleur'];
entries.flat(); // would remove empty spaces

const arrayFlatMap = array.flatMap(num => (num + 10));

const userEmail = '       eddytheeagle@gmail.com';
const userEmail2 = 'johnyydanger@gmail.com        '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

let userProfiles = [['commanderTom', 23], ['derekGuy', 42], ['billy', 17]];
Object.fromEntries(userProfiles);

try {
    true + 'hi'; // type coersian, 
} catch {
    console.log("you messed up") 
} //logs 'truehi'

try {
    bob + 'hi'
} catch(error) { // dont need to put (error), but you can
    console.log('you messed up' + error)
}