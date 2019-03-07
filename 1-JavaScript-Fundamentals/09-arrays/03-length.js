let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); // length tells you how long something is


let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors);
console.log(colors.toString());

let newColors = colors.toString();
console.log(newColors[2]); // = u // third letter or index 2
console.log(typeof newColors);


// Challenge
let arr = [1,2,3,4,5]; // part 1
console.log(typeof arr); // object

arr.reverse(); // part 2
console.log(arr);

// Answer
let arr = [1,2,3,4,5]; // part 3

if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(a => console.log(a));
}