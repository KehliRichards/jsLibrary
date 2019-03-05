/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 

let i = true;
let j = false;

/*        (1)
1-Keyword for boolean - no quotation marks
*/

let on = true;
console.log(on); // true

let off = false;
console.log(off); // false



/*
Null
******************
Null = empty value (not 0, not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty); // null



/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined;// never do this
console.log(undef); // undefined

let grass;
console.log(grass); // undefined



/*
Null vs, Undefined
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasn't been created yet.
*/



/*
Numbers
*********
Numbers are exactly what they sound like, numbers. In JS, you don't need anything special to write them.
*/

let degrees = 90;
console.log(degrees);


let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = '123'; // not tecnically a number, it's a string

let b = Number(a);
console.log(b);



/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others
*/

let stringONE = "double quotes";
let stringTwo = 'sing quote';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); // = 1150 
console.log(second); // = 1050100

// let firstName = "Kehli";
// let lastName = "Richards";
// console.log(firstName, lastName); // = Kehli Richards
// console.log(firstName + lastName); // = KehliRichards
// console.log(firstName +' '+ lastName); // = Kehli Richards

let fullName = 'Kehli' + 'Richards';
console.log(fullName); // = KehliRichards



/*
Objects
**************

*/

let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
};

console.log(car1);
console.log(typeof car1); // typeof tells you what datatype it is, in this case it's an object



/*
Arrays
************
Arrays are containers that hold lists of items
*/
let list =  [  'item1',   'item2',    'item3', true];
 /*   (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let burritos = ['large',4,true];
console.log(burritos);
console.log(typeof burritos); //object is a container that can hold multipule datatypes, so Arrays are technically Objects
// Arrays are technically not datatypes of their own



/************************
Addition Vs Concatenation
*************************/

let x = 10;
let y = 15;
console.log(x + y);

let third = 1050 + '100';
console.log(third); // = concatenation because of string (strings them together, doesn't add)
console.log(typeof third); // = string (not a number or an object)

let firstName = 'Kehli';
let lastName = 'Richards,';
let houseNumber = 6429;
let street = 'Timber Walk Drive,';
let city = 'Indianapolis,';
let state = 'IN';
let zipcode = 46236;
// console.log(firstName, lastName, houseNumber, street, city, state, zipcode);
console.log(firstName, lastName, houseNumber, street, city, state, zipcode);



/*
Strings - Properties
********************
Properties are qualities associated with a datatype.
Strings have properties, or the qualities associated with that string.
The length of a string is a property
*/

let myName = "Kehli";
console.log(myName.length);



/* Methods
***********
Methods are like a tool that can help us manipulate our data.
.Property and .Methods() *no parenthesis for properties*
*/

let myNameIs = "Kehli";
console.log(myNameIs.toUpperCase());

let home = "My homeis in indianapolis"; // True (below)
console.log(home.includes('indianapolis')); // checks to see if a line includes something (ie: indianapolis) will get true or false

let home = "My homeis in indianapolis"; // False (below)
console.log(home.includes('nashville'));

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';

let words = sent.split(' '); // The space between the '' makes it so the sentence splits at each space
console.log(words);

/* let sent = 'This sentence will be split into individual parts';
let word = sent.split('i');
console.log(word); // This one will split at every 'i'. */