'use strickt';

let rand = Math.floor(Math.random()*10 + 1);
let answer

for (;answer !== null && Number(answer) !== rand; answer = prompt ('guess number?') );

console.log(rand);