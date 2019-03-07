3 == 3;
// Equal opperator
3 == '3';
console.log(3 == '3'); // true (js adjusts the string to be a number, it assumes we want it to be the same)
console.log('3' == '3'); // true
console.log(3 == 3); // true

// Strictly equal
console.log(3 === '3'); // false
console.log('3' === '3'); // true
console.log(3 === 3); // true

// Not equal
console.log('3' != 3); // false

// Strictly not equal
console.log('3' !== 3); // true

// Greater than
console.log(3 > 2); // true

// Less then
console.log(2 < 3); // true

// Greater then or Equal to
console.log(4 >= 2); // true (=> is a reserved symbol in js, doesn't work here)

// Less than or Equal to
console.log(2 <= 4); // true (not a reserve for <=)

// And
console.log(4 > 2 && 3 < 1); // false (BOTH statements need to be true or it's false)

// Or
console.log(4 > 2 || 3 < 1); // true (one or the other can be true, they don't both have to be true)
console.log(4 > 2 || 3 > 1); // true