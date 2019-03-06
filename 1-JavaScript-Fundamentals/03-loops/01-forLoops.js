/**********************
       FOR LOOPS
**********************/

/* (ONLY) Takes 3 expressions. A variable declaration. An expression to be evaluated before each iteration.
An expression to be evaluated at the end of each iteration. */

for (let i = 0; i < 10; i ++) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 0; i --) {
    console.log(i);
}

for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

let myName = 'kehli';
for (counter = 0; counter < myName.length; counter = counter + 1){
    console.log(myName.substring (counter, counter+1));
}


let myName1 = 'kehli';
for(let i = 0; i < myName1.length; i++) {
    console.log(myName1[i]);
}

let sum = 0;
for(let i = 0; i <= 50; i++) {
    sum += i // sum = sum + i
}
console.log(sum);