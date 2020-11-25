'use strick'
let i,b;
let c = 0;
let d = 0;
let e = 0;
let h = 0;

for (i = 0; i<=20; i++) { //условие
    if(i % 1) continue; //тело цикла
    console.log(i);
}
for (b = 0; b<=20; b++) { //условие
    if(b % 2) continue; //тело цикла
    console.log(b)
}

do { 
    if (++d % 2) continue;
    console.log(d)

} while (d <= 20);

do { 
    if (++c % 1) continue;
    console.log(c)

} while (c < 20);


while (e < 20) {
    if (++e % 2) continue; {console.log(e);};
}

while (h < 20) {
    if (++h % 1) continue; {console.log(h);};
}


