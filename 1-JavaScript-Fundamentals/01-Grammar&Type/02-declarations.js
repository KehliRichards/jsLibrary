// Notes is 01-comments.js
/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/

// let is JavaScript version of var(variable)
// left of = is name, right of = is value
// variable must begin with a letter, underscore, or dollar sign
// can't name variable with a number as first character
// no spacing allowed for variable name
// standard practice is 'camo-case' autumnIsCool (start with lowercase, all other words start uppercase)

// JS is CASE SENSITIVE

// let a = 2;
// let     b      =      1; 

/*(1)    (2)    (3)    (4)     
1- Keyword
2- Variable name 
3- Assignment Opperator
4- Variable value
*/

// var c = 2;
// var CAN still be used, but let is better for variables


/*******************
    DECLARATIONS
*******************/

/*
Declarations are the LEFT SIDE of a variable
    It is simply the let x
    It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    It incorporates the variable name (x), the assignment operator (=), and the value (10) =>
*/
// let x;
// console.log('Declaration:',x);

// x=10;
// console.log('Initialization:',x);

let x;
console.log('Declaration:',x);
// giving variable a value initializes it
x=5
console.log('Initialization:',x);

x=33;
console.log('Initialization:',x);


let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = "Okay!";
// elevenFifty = "Super!"; Do NOT Do This!
console.log(today, elevenFifty);