// Destructuring
const obj = {
    player: 'Bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

const {player, experience} = obj; // same as above
let {wizardLevel} = obj; // same as above
console.log(player); //would output Bobby

//obj properties
const name = 'john snow';
const obj = {
    [name] : 'hello', // can calculate properties
    ['ray' + 'smith']: 'hi'
}

const a = 'simon';
const b = true;
const c = {};
const obj = {
    a:a,
    b:b,
    c:c
}
const obj = { a, b, c } // same as above