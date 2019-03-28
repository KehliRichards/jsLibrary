// WEEK ONE, DAY ONE !!!!!!!!!!!!!!!!!!!!!!!!!!!



// (Ctrl + ?) = //

// What comments are for:
// Making notes for ourselves and other developers

// Ex: This part of the code is very important!
// Ex: Come back to this part later to fix!

// console.log("yay");
// console.log("Hey this worked");

console.log("Kehli Richards");

console.log("How to make bread below (Multi-Line Comment)");
/*
Get Flour
Get Eggs
Mix Ingredients
Knead Dough
Let Dough Rise
Bake
Enjoy Bread
*/

// let is JavaScript version of var(variable)
// left of = is name, right of = is value
// variable must begin with a letter, underscore, or dollar sign
// can't name variable with a number as first character
// no spacing allowed for variable name
// standard practice is 'camelCase' autumnIsCool (start with lowercase, all other words start uppercase)

// JS is CASE SENSITIVE

// const is another keyword for variable and it makes the variable constant, so it won't change
// const means you can't reasign the variable

// JS is precise up to the 15th number. The 16th number and up gets rounded.
// Same for decimals, it will round, so math is not always precise. WATCH FOR THIS

// boolean: Binary data-type. Only valid values are true or false.
// null: keyword that denotes a null value. This is not 0. It is the absence of value
// undefined: a data-type that has not been defined with a value.
// number: a numerical data-type.
// string: any combination of characters to be read as text.
// symbol: used to make anonymous object properties.
// object: a container which can hold multiple data-type values.



// WEEK ONE, DAY TWO !!!!!!!!!!!!!!!!!!!!!!!!!!

// WEBPAGE DUE ON MARCH 12TH!!!!!!!!!!!!!!!!!!!!!!!!!
// balsomiq (wireframing)
// unsplash (website with free, non copyrighted, pictures)


// clip-path: polygon(% %, % %, % %, % %);

// CMD in computer searchbar = command prompt
// dir = directory
// cd + location = change directory
// cd .. takes you back
/* cd + desktop
        javascript-library
        git status
        git --version
        git init
        git add . (period means ALL instead of specifying files you want looked at)
        git commit -m "first commit"
        paste url (git remote add origin https://github.com/KehliRichards/jsLibrary.git)
        git push -u origin master
*/

/*Global scope
var x = 12
{
    //local scope (within curly brackets)
    var y = 12;
} */

// The Declaration: var x;
// The Initialization: x = 7;

// Hoisting (js scans code and 'brings all key values to the top')
// js scans code twice, hoists important code to top, then runs again


// mkdir (makes new directory(folder)) in command prompt

// escape character ex: (console.log('didn\'t work'))


// alt + z to word wrap in VS Code (make it so long code isn't running off the screen)



// WEEK ONE, DAY THREE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Morning Challenge
// let fb = 25;

// ELSE IF
// if(fb%3===0 && fb%5===0){
//     console.log('Fizz Buzz');
// } else if(fb%5===0){
//     console.log('Buzz');
// } else if(fb%3===0){
//     console.log('Fizz');
// } else {
//     console.log('This does not work');
// }

// SWITCH
// let fb = 30;

// switch(true) {
//     case (fb%3 == 0 && fb%5 == 0):
//     console.log('Fizz Buzz')
//     break;
//     case (fb%5 == 0):
//     console.log('Buzz')
//     break;
//     case (fb%3 == 0):
//     console.log('Fizz')
//     break;
// } 

// TERNARY
// let fb = 15;

// (fb%3 == 0 && fb%5 == 0) ? console.log('Fizz Buzz') : (fb%5 == 0) ? console.log('Buzz') : (fb%3 == 0) ? console.log('Fizz') : fb;



// WEEK ONE, DAY THREE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// for(let i =0; i<=100;i++){
//     if(i % 3 ==0 && i % 5==0){
//         console.log('FizzBuzz');
//     } else if(i %5 ==0){
//         console.log('Buzz')
//     } else if( i % 3 ==0){
//         console.log('Fizz')
//     } else {
//         console.log(i);
//     }
// }

// for(let FB = 0; FB<=100;FB++){
//     switch (true) {
//       case (FB % 3 === 0 && FB % 5 === 0):
//       console.log('Fizz Buzz');
//       break;
//       case (FB % 5 === 0):
//       console.log('Buzz');
//       break;
//       case (FB % 3 === 0):
//       console.log('Fizz');
//       break; 
//       default :
//       console.log(FB); 
//     }
    
// }




  // WEEK TWO, DAY ONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Challenge
let arrColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'grey', 'black'];
let arrSuf = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];
let index = 1;

function placement(){
    for(let i = 0; i <= arrColor.length; i++) {
        console.log(arrColor[i]);
    }
}

placement(); // ?????????



// Answer

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'grey', 'black'];
let suf = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorNums(color, sufx){
    for(let x = 0; x < 10; x++){
        // console.log(color[x]);
        // console.log(sufx[x]);
        console.log(`${x + 1}${sufx[x]} is ${color[x]}`); // 1st is red, 2nd is orange, 3rd is yellow, etc.
    }
}

colorNums(colors, suf);



let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'grey', 'black'];
let suf = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorNums(color, sufx){
    for(let x = 10; x > 0; x--){
        // console.log(color[x]);
        // console.log(sufx[x]);
        console.log(`${x}${sufx[x-1]} is ${color[x-1]}`); // 10th is black, 9th is grey, 8th is purple, etc.
    }
}

colorNums(colors, suf);



// WEEK TWO, DAY TWO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// API is the medium between the browser and the data


// promise example
const wait1 = () => {
    return new Promise(resolve => setTimeout(resolve, 2000), console.log('working...'))
}
const wait2 = () => {
    return new Promise(resolve => setTimeout(resolve, 4000), console.log('still working...'))
}
const wait3 = () => {
    return new Promise(resolve => setTimeout(resolve, 6000), console.log('a little longer...'))
}
 
wait1()
    .then(wait2)
    .then(wait3)
    .then(function() {
        console.log('all done!');
    })








// WEEK TWO, DAY THREE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let originalObject = {
    age:19,
    name: 'Luke SKywalker',
    eyeColor: 'blue',
    isJedi: true
};

console.log(originalObject);

function swap(newObj) {
    let ret = {};
    for(let key in newObj){
        ret[newObj[key]] = key;
    }
    return ret;
}

let newObject = (swap(originalObject));
console.log(newObject);







// WEEK TWO, DAY FOUR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Challenge

/*
Challenge (Strings):
Pig Latin:

Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.

If able to do so, return the value into another variable and print that variable

What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

let x = 'lleyway'
// console.log(x[0]);

function pigLatin(){
    if (x[0] === 'a' || x[0] === 'e' || x[0] === 'i' || x[0] === 'o' || x[0] === 'u') {
        console.log(x + 'ay');
    } else if (x[0] !== 'a' || x[0] !== 'e' || x[0] !=='i' || x[0] !=='o' || x[0] !=='u') {
        console.log(x + 'by');
    }
    
}

pigLatin();



// Answer // PIGLATIN TRANSLATOR
function piggie(piggie) {
    let str = piggie.toLowerCase();

    if (str.split(' ').length > 1) {
        let x = str.split(' ');
        for (y of x){
            switch (y[0]) {
                case 'a':
                    console.log(`${y}ay`);
                    break;
                case 'e':
                    console.log(`${y}ay`);
                    break;
                case 'i':
                    console.log(`${y}ay`);
                    break;
                case 'o':
                    console.log(`${y}ay`);
                    break;
                case 'u':
                    console.log(`${y}ay`);
                    break;
                default:
                    let newArr = y.split('');
                    console.log(`${newArr.splice(1).join('')}${y[0]}ay`);
                    break;
            }
        }
    } else {
        switch (str[0]) {
            case 'a':
                console.log(`${str}ay`);
                break;
            case 'e':
                console.log(`${str}ay`);
                break;
            case 'i':
                console.log(`${str}ay`);
                break;
            case 'o':
                console.log(`${str}ay`);
                break;
            case 'u':
                console.log(`${str}ay`);
                break;
            default:
                let newArr = str.split('');
                console.log(`${newArr.splice(1).join('')}${str[0]}ay`);
                break;
        }
    }
}
piggie('apples and grape');


// Zach's Answer

function translatePigLatin(str) {
    let vowel = "aeiou"; //variable that stores vowels as a string
    let match = -1; //will check whether a match to a vowel has been found
    let index = -1; //checks the index of the vowel that has been found
    
    for (let x = 0; x < str.length && match < 0; x++) { //for loop that will check our string to find the index of the first vowel in the word.
        match = vowel.indexOf(str.charAt(x)); //sets the value of the variable match equal to the index of the vowel location (here - for this example - it should be 1. 'a' is the first vowel in our string, so the index is 1)
        if (match >= 0) { //if the variable match's value is greater than or equal to 0...
            index = x; //set the value of the index variable to x (again, in this example, it should be 1)
        }
    }

    if (index > 0) { //if the variable index is greater than 0...
        str = str.slice(index) + str.substring(0, index) + "ay"; //use the slice method to remove any character before our index's value (which is 1 - so here we should only remove 'c' in california). We then use the substring method to grab any letters between 0 (first letter - 'c') and our index (1) - this should just grab 'c'. We then tack on 'c' + 'ay' to the end of our word
    } else { //else...
        str = str.slice(index) + str.substring(0, index) + "way"; //if the first character of our word is a vowel (our index should be 0, and nothing will be sliced), this will tack on 'way' to the end of the word.
    }
    return str;
}

console.log(translatePigLatin("california"));

// Without Notes

function translatePigLatin(str) {
    let vowel = "aeiou";
    let match = -1;
    let index = -1;
    
    for (let x = 0; x < str.length && match < 0; x++) {
        match = vowel.indexOf(str.charAt(x));
        if (match >= 0) {
            index = x;
        }
    }

    if (index > 0) {
        str = str.slice(index) + str.substring(0, index) + "ay";
    } else {
        str = str.slice(index) + str.substring(0, index) + "way";
    }
    return str;
}

console.log(translatePigLatin("california"));



