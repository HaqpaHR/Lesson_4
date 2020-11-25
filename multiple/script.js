'use strickt'
let answer = prompt("put number");


// for (let i = 1; i < 100; i++) {
//     if (i % Number(answer)) continue;
//     console.log(i);
//  };

let i = 0;

let number = prompt('how many numbers do you need?')

    for (let i = 1; i <= number; ++i) {
        console.log(i*answer);
    }

