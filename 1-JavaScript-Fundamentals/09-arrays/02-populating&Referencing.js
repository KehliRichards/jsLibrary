/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list =  [  'item1',   'item2',    'item3']; // arrays are objects
console.log(typeof list); // helps find the datatype of something in JS

let list2 = ['orange', 'banana', 'oreos'];
console.log(list2); // = [ 'orange', 'banana', 'oreos' ]

let list2 = ['orange', 'banana', 'oreos'];
console.log(list2[1]); // = banana // = square brackets indicate the index location of items in array


let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
console.log(typeof students); // = object (array)
console.log(students instanceof Array); // = true
console.log(students[2]); // = Rhys [] = indez

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
console.log(students[6]); // = [ 'Ryan', 'Iesha', 'Amira' ]
console.log(students[6][1]); // = Iesha
console.log(students[6][0]); // = Ryan
console.log(students[6][2]); // = Amira


let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
console.log(students[6][2][1]); // = Trevor
let myFriend = students[6][2][1];
console.log(`Hello ${myFriend}, you look nice today.`); // Hello Trevor, you look nice today.


let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
let myFriend = students[6][1];
console.log(`Hello ${myFriend}, you look nice today.`);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
let myFriend = students[6][3];
console.log(`Hello ${myFriend}, you look nice today.`);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', ['Randy', 'Trevor'], 'Amira']];
let myFriend1 = students[6][1];
let myFriend2 = students[6][3];
console.log(`Hello ${myFriend1} and ${myFriend2}, you both look nice today!`);



let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for(let item in food){
    console.log(food[item]);
}

let pizza = 'Pizza';
food.push(pizza);

console.log(food);

for(let item in food){
    console.log(food[item]);
}
// splice allows you to remove items from an array and replace them if you want
food.splice(1,1,'Bananas'); // go to first index, delete count, *replace with what?* <- last one optional
console.log(food);

food.splice(2,0,'Sweet Potatoes'); // inserts the new item BEFORE the called index, it takes spot 2
console.log(food);

// food.splice(5,1,'Snickerdoodles'); // gets rid of Hotdogs
// console.log(food);

food.splice(5,0,'Snickerdoodles'); // puts snickerdoodles at index 5 and moves(DISPLACE) hotdogs to index 6
console.log(food);

food.pop(); // removes the LAST element in an array
console.log(food);



let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.forEach(f => { // loop and a function all in one // f could be anything
    console.log(f);
})

food.forEach((food,number) => { // gives you item as well as index number // both can be called anything
    console.log(number);
    console.log(food);
})

food.forEach((item,number,food) => { // gives you item as well as index number // both can be called anything
    console.log(number);
    console.log(item);
    console.log(food);
})



let movies = ['The Avengers', 'Avengers: Age of Ultron', 'Avengers: Infinity War']

movies.forEach((item) => {
    console.log(item);
})

movies.push('Avengers: End Game')
console.log(movies);

movies.splice(1,1,'Iron Man');
console.log(movies);