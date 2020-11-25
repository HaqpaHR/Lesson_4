'use strickt';

let rand = Math.floor(Math.random()*10 + 1);
let answer

while (answer !== null && Number(answer) !== rand) {

    answer = prompt ('guess number?')
}

console.log(rand);