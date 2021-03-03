//Template Strings
const name = "Sally";
const age = 34;
const pet = "horse";
const greeting = "Hello" + name + " you seem to be doing " + feeling;

const greetingBets = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`; // better than above

// default arguments
function greet(name='tai', age=30, pet='cat') { //sets default arguments if none are given
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}