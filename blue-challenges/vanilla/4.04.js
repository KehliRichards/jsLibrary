/*
  BRONZE ::
    Create a function that takes in the string

    const stringCheck = '  Welcome to eleven fifty   ';

    The function should remove extra whitespace before or after 
    the characters is trimmed, and should change the string so that the 
    the first 'e' and 'f' in 'eleven fifty' is capitalized. 

  SILVER ::
    Add typechecking and make sure the string parameter is a string.
    Also check to make sure the length is greater than zero, but less than
    30. If the string is invalid, return a message for an invalid argument.

  GOLD ::
    Create a callback function that prints a parameter to the console.
    Add a second parameter to the string function from Silver and Bronze for a callback function.
    Instead of returning the data, pass it callback function, and log it to the console.
*/





// const stringCheck = ' Welcome to eleven fifty ';


// function strChk (str) {
//     str = stringCheck.trim();
//     str = str.split(' ');
//     for (let i = 2; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     str = str.join(' ');

//     if (typeof(str) === 'string' && str.length > 0 && str.length < 30) {
//         console.log('This is valid!');
//     } else {
//         console.log('Invalid Argument');
//     }

//     return(str);
    
// }

// let fStr = strChk();
// console.log(fStr);


//Alecx
const stringCheck = ' Welcome to eleven fifty ';

const logger = data => {
    console.log(data);
}

const challenge = (str, callback) => {

    if(typeof str !== 'string' || str.length < 1 || str.length > 30) {
        callback('Invalid Argument')
        return;
    }
    
    let trimmedString = str.trim();

    let replacedString = trimmedString.replace('eleven fifty', 'Eleven Fifty');

    callback(replacedString);
}

challenge(stringCheck, logger);