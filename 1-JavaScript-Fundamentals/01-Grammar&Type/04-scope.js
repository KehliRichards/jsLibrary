/*  
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? So why do we insist on using let excusively? Well, check out the below:

NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/

function constTest() {
    const scope = 1;
    if (true) {
      const scope = 2;
      console.log(scope); // 2
    }
    console.log(scope); // 1
  }
  
  constTest();

var x = 12;

function varTest() {
    var x = 3;
    if(1 == 1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);



var x = 12;

function letTest() {
    var x = 33;
    if(true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

letTest();
console.log(x);


/* This is a local scope x = 45
 if(true){
        let x = 45;
        console.log(x);
    }
*/

/* This is a local scope x = 33
function letTest() {
    var x = 33;
    ***********
    console.log(x);
}
*/

/* this is a global scope x = 12
var x = 12;

***************

letTest();
console.log(x);
*/

/*
var x = 15;
console.log(x); //15
{
    var y = 12;
    console.log(y); //12
}
console.log(y); //12


let x = 5;
console.log(x); //5
{
    let x = 7;
    console.log(x); //7
}
console.log(x); //5
*/



/**** Hoisting ****/

console.log(scissors); // = undefined

scissors = 'blue';

console.log(scissors); // = blue
var scissors;

// js scans code twice, hoists important code (js keywords, ex: let, var, const, etc.) to top, then runs again
// which is why scissors first = undefined and then = blue

b();
console.log(a);

function b() {
    console.log('This is all hoisted!');
}
var a = 'This is not hoisted';


b();
console.log(a);

function b() {
    console.log('This is all hoisted!');
}
var a = 'This is not hoisted';