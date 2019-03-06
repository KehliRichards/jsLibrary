/**************************
SWITCH
Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument being evaluated 
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary 
**************************/


let friend = "Bob";

switch (friend) {
    case "Autumn":
      console.log("Hey Autumn, when are you going rock climbing?");
      break;
    case "Dave":
      console.log("Hey Dave, how is Cooper?");
      break;
    case "Alecx":
      console.log("Hey Alecx, when are we playing DnD?");
      break;
    default:
      console.log(`I'm sorry, ${friend}, but do I know you?`); // note the (`backtick) instead of (' single quote or " double quote)
}                           // ^^^ This is string interpolation



let dessert = "Chocolate";

switch (dessert) {
    case "Pie":
      console.log("Pie, pie, me oh my!");
      break;
    case "Cake":
      console.log("Cake is great!");
      break;
    case "Ice Cream":
      console.log("I scream for ice cream!");
      break;
    default:
      console.log(`I'm sorry, ${dessert} is not on the menu.`);
}



let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
      console.log('worked');
      break;
    case (yep > 0):
      console.log('Worked!')
      break;
    default:
      console.log('didnt work');
}






let fb = 25;

if(fb%3===0 && fb%5===0){
    console.log('Fizz Buzz');
} else if(fb%5===0){
    console.log('Buzz');
} else if(fb%3===0){
    console.log('Fizz');
} else {
    console.log('This does not work');
}