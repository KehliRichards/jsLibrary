console.log('Classes file');

//ES6 JS Classes

class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");

//we can now use the instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
var anonLady = new User("Anonymous Lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

let kehli = new User("Kehli");
kehli.greet();
kehli.status();

let sam = new User("Sam");
sam.greet();
sam.status();