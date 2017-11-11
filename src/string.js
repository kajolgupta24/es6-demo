" use strict"

// use of string methods

let s= 'john loves javascript';

console.log(s.startsWith('john'));// use of startsWith
console.log(s.endsWith('javascript'));// use of endsWith
console.log(s.includes('loves')); // use of includes


// number methods

console.log (Number.isFinite(-3));// isFinite
console.log (Number.isFinite(NaN));
console.log (Number.isFinite(Infinity));

console.log (Number.isNaN(-3));// isNaN
console.log (Number.isNaN(NaN));
console.log (Number.isNaN(Infinity));

console.log (Number.isInteger(-3));// isInteger
console.log (Number.isInteger(NaN));
console.log (Number.isInteger(Infinity));