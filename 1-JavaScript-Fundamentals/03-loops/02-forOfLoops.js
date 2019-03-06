/***********************
      FOR OF LOOPS
***********************/
// objects are not iterable(can't be accessed by numbers), but good for arrays

let student = {
    name: "Peter",
    awesome = true,
    degree = "JavaScript",
    week: 1
};

for (item of student) {
    console.log(item);
} // = error


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (/*let*/ cat of catArray) { // can use let, don't need to
    console.log(cat, 'says meow');
}