let weather = 75;

if(weather < 70){
    console.log('Wear a jacket!');
}else{
    console.log('You do not need a jacket.');
}


let weather1 = 65;

if(weather1 < 70){
    console.log('Wear a jacket!');
}else{
    console.log('You do not need a jacket.');
}



let name = 'Kehli';

if(name = 'Kehli'){
    console.log(name);
} else {
    console.log('Hello, what is your name?');
}

if(name = 'Kehli'){
    console.log('Hello, my name is', name+'!');
}else{
    console.log('Hello, is your name Bob?');
}


let name1 = 'Bob';

if(name1 === 'Kehli'){
    console.log('Kehli!');
} else {
    console.log('Hello, what is your name?');
}

if(name1 === 'Kehli'){
    console.log('Hello, my name is Kehli.');
}else{
    console.log('Hello, is your name Bob?');
}


let name = 'Jenny';

if('Autumn' == name){
    console.log(name);
} else {
    console.log('Hello, what is your name?');
}

let name1 = 'Autumn';

if('Autumn' == name1){
    console.log(name1);
} else {
    console.log('Hello, what is your name?');
}

let name = 'Jenny';

if('Autumn' == name){
    console.log(name);
} else {
    console.log('Hello, is your name', name+'?');
}



// My Attempt
let myName = 'aUTuMN';

if(/^[A-Z]/.test(myName)){
    console.log(myName);
} else {
    console.log('hey its not written correctly');
}


let myName1 = 'AUTUMN';

if(/^[A-Z]/.test(myName1)){
    console.log(myName1.charAt(0));
} else {
    console.log('hey its not written correctly');
}


let myName2 = 'aUTUMN';

if(/^[A-Z]/.test(myName2)){
    console.log(myName2.charAt(0));
} else {
    console.log(myName2.toLowerCase());
}



// Real way
// Bronze
let myName = 'aUTuMN';

if(myName[0] == myName[0].toUpperCase()){
    console.log(myName);
} else {
    console.log('hey its not written correctly');
}

// Silver
let myName = 'aUTuMN';

if(myName[0] == myName[0].toUpperCase()){
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}

// Gold
let myName = 'aUTuMN';

if(myName[0] == myName[0].toUpperCase()){
    console.log(myName[0] + myName.substr(1).toLowerCase());
} else {
    console.log(myName[0].toUpperCase() +myName.substr(1).toLowerCase());
}


/****************
ELSE IF
****************/

let age = 26;
let a = 'Yay! You can vote!';
let b = 'Yay! You can drink!';
let c = 'Yay! You can rent a car!';

if (age >= 18 && age <= 20) {
    console.log(a);
  } else if (age >= 21 && age <= 24) {
    console.log(a,b);
  } else if (age >= 25) {
    console.log(a,b,c);
  } else {
    console.log('Sorry, you are too young to do anything.');
  }


  let age = 30;

if (age >= 25) {
    console.log('Yay! You can rent a car!');
  } else if (age >= 21) {
    console.log('Yay! You can drink!');
  } else if (age >= 18) {
    console.log('Yay! You can vote!');
  } else {
    console.log('Sorry, you are too young to do anything.');
  }

// Best to have STRICTEST requirement first. (in this example, it was the over 25)