'use strickt';

let rand = Math.floor(Math.random()*10 + 1);
let answer;

do {
    answer = prompt ('guess number?');}
while (answer !== null && Number(answer) !== rand);

result = String('Random number was' + rand);

alert(result);

console.log('random number was' , rand)

