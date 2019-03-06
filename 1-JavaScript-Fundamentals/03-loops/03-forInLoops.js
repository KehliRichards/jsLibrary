/**********************
      FOR IN LOOPS
**********************/

let student = {
    name: "Kehli",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    console.log(item);
} // prints the properties or keys ex: name/awesome/degree/week

let student = {
    name: "Kehli",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    console.log(student[item]); // square bracket notation
} // prints the values ex: Kehli/true/JavaScript/1

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
    console.log(cat);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
    console.log(catArray[cat]);
}

// not right
let name = "kehli";

for(let myName in name) {
    console.log(name[myName[0]].toUpperCase())
}


// right
let studentName = 'auTuMn';
let capName;

for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName);