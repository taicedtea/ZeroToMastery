'turtle'.padStart(10); // "    turtle", turtle with 4 spaces in front
'turtle'.padEnd(10); // "    turtle", turtle with 4 spaces after

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,);

Object.values
Object.entries
Object.keys //old

let obj = {
    username0: 'Santa',
    username1: 'Grinch',
    username2: 'Elf'
}

Object.keys(obj).forEach((key, index) => { //old way to iterate throguh objecst
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => { // returns values
    console.log(value);
})

Object.entries(obj).forEach(value => { // returns both value and entry
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');// returing second item in array "Santa", "Grinch", "Elf"
})

