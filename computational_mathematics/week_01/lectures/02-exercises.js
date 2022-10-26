// Croft, A. and R. Davison Foundation maths. (Harlow: Pearson, 2016) 6th edition. Chapter 14 Number bases.

const {
   convertToDecimal,
   convertDecimalToBinary,
   convertFromDecimal,
   getFractionBase,
} = require('../helpers/conversions');

// 1. on p.158, Self-assessment questions 14.2 and Exercise 14.2

// ## Questions
// 1. Describe one way to converting decimal numbers to binary numbers
// 2. What number is the binary system based upon ?
// 3. How many different digits occur in the binary system ?

// ## Answers
// 1. Divide by 2 the decimal number iteratively, get the remainders and then write out the result using the remainders from bottom to top
// 2. 2
// 3. [0, 1]

// ## Exercice
// 1. Convert the following decimal numbers to binary numbers
const decimals = [19, 36, 100, 796, 5000];
decimals.forEach((decimal) => {
   console.log(
      `decimal: ${decimal} | binary: ${convertFromDecimal(decimal, 2)}`
   );
});

console.log('\n');

// 2. Convert the following binary numbers to decimal numbers
const binaries = ['111', '10101', '111001', '1110001', '11111111'];
binaries.forEach((binary) => {
   console.log(`binary: ${binary} | decimal: ${convertToDecimal(binary, 2)}`);
});

console.log('\n');

// 3. What is the highest decimal number that can be written in binary form using a maximum of
// a) two binary digits
// b) three binary digits
// c) four binary digits
// d) five binary digits
// Note: Can you spot a pattern?
// e) write a formula for the highest decimal number that can be written using N binary digits

const getMaxDecimalNumberUsingNBinaryDigits = (n) => {
   let binary = '';

   for (let i = 0; i < n; i++) {
      binary = binary + '1';
   }

   return convertToDecimal(binary, 2);
};

const maxNumbers = [2, 3, 4, 5];
maxNumbers.forEach((n) => {
   console.log(
      `N: ${n} | decimal: ${getMaxDecimalNumberUsingNBinaryDigits(n)}`
   );
});

console.log('\n');

// 4. Write the decimal number 0.5 in binary
// Multiply the 0.5 by 2
// 0.5 x 2 = 1
// Since the result is 1, add 1 to the binary fraction: 0.1

// 2. on p.161, Self-assessment questions 14.3 and Exercise 14.3

// ## Questions
// 1. How many different digits are used in the octal system ?
// 2. What number is the binary system based upon ?

// ## Answers
// 1. 0, 1, 2, 3, 4, 5, 6, 7 (8)
// 2. 8

// 1. Convert the following decimal numbers to octal numbers:
const decimals2 = [971, 2841, 5014, 10000, 17926];
decimals2.forEach((decimal) => {
   console.log(
      `decimal: ${decimal} | octal: ${convertFromDecimal(decimal, 8)}`
   );
});

console.log('\n');

// 2. Convert the following octal numbers to decimal numbers:
const octals = ['73', '1237', '7635', '6677', '67765'];
octals.forEach((octal) => {
   console.log(`octal: ${octal} | decimal: ${convertToDecimal(octal, 8)}`);
});

// 3. What is the highest decimal number that can be represented by an octal number of
// a) one digit -> 7
// b) two digits -> 77
// c) three digits -> 777
// d) four digits -> 7777
// e) five digits -> 77777
// f) N digits -> N x '7'

console.log('\n');

// 3. on p.161, Self-assessment questions 14.3 and Exercise 14.3

// ## Questions
// 1. What number is the hexadecimal system based upon ?

// ## Answers
// 1. 16

// 1. Convert the following hexadecimal numbers to decimal numbers:
const hexadecimals = ['91', '6C', 'A1B', 'F9D4', 'ABCD'];
hexadecimals.forEach((hexadecimal) => {
   console.log(
      `hexadecimal: ${hexadecimal} | decimal: ${convertToDecimal(
         hexadecimal,
         16
      )}`
   );
});

console.log('\n');

// 2. Convert the following decimal numbers to hexadecimal numbers:
const decimals3 = [160, 396, 510, 25000, 1000000];
decimals3.forEach((decimal) => {
   console.log(
      `decimal: ${decimal} | hexadecimal: ${convertFromDecimal(decimal, 16)}`
   );
});

// 3. Calculate the highest decimal number that can be represented by a hexadecimal number with:
// a) one digit -> F
// b) two digits -> FF
// c) three digits -> FFF
// d) four digits -> FFFF
// e) five digits -> FFFFF
// f) N digits -> N x 'F'

// Challenge Exercise 14

// 1. Write the following decimal numbers in binary, octal and hexadecimal form:
// a) 0.25
// b) 0.75

console.log('\n');

const a2 = getFractionBase(0.25, 2);
const a8 = getFractionBase(0.25, 8);
const a16 = getFractionBase(0.25, 16);
console.log({ a2, a8, a16 });

const b2 = getFractionBase(0.75, 2);
const b8 = getFractionBase(0.75, 8);
const b16 = getFractionBase(0.75, 16);
console.log({ b2, b8, b16 });

console.log('\n');

// Practice Quiz
console.log(`Answer 1: ${convertToDecimal('1111', 2)}`);
console.log(`Answer 2: ${convertToDecimal('1A0', 16)}`);
console.log(`Answer 3: ${convertFromDecimal(11, 16)}`);
console.log(`Answer 5: ${convertFromDecimal(7, 2)}`);

console.log('\n');

console.log(`Answer 1: ${convertFromDecimal(357, 2)}`);
console.log(`Answer 2: ${convertFromDecimal(558, 5)}`);

// 00 0
// 01 1
// 10 2
// 11 3
// 100 4
// 101 5
// 110 6
// 111 7
