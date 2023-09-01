const { convertToDecimal } = require('../helpers/conversions');

// Number bases

// ## Base 10
// Use digits 0, 1, 2 ..., 9
// When you count to 9 you go back to 0 and add a digit to left starting with 1

// ## Generic base n
// Use digits 0, 1 ..., n -1

// 10 = 2
// 100 = 4
// 1000 = 8
// 10000 = 16

// ## Base 10 Example
// 127_10 = 1 x 10^2 + 2 x 10^1 + 7 x 10^0 = 100 + 20 + 7

// ## Base 2 Example
// 1001_2 = 1 x 2^3 + 0 x 2^2 + 0 x 2^1 + 1 x 2^0 = 8 + 0 + 0 + 1 = 9_10

// ## Base 2 to base 10
// convert 100101011_2
// 2^8 2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
// 256 128 64  32  16  8   4   2   1
// 1   0   0   1   0   1   0   1   1
// 256 0   0   32  0   8   0   2   1
// = 299_10

const binary = convertToDecimal('100101011', 2);
const hexadecimal = convertToDecimal('1F', 16);

console.log({ binary, hexadecimal });

// ## Base 16 Hexadecimal
// 0, 1, ... 9, A, B, C, D, E, F
// Counting 0, 1 ... 9, A ... F, 10 ... 10, 1A ...

// Examples 1F = 1 x 16^1 + 15 x 16^0 = 31_10

// Generic base b, conversion to decimal
// a_n a_(n-1) a_(n-2) ... a_0

// In decimal units corresponds to
// a_n x b^n + a_(n-1) x b^(n-1) + ... a_0 x b^0

// ## Converting decimal to binary
// 2^0 = 1
// 2^1 = 2
// 2^2 = 4
// 2^3 = 8
// 2^4 = 16
// 2^5 = 32
// 2^6 = 64
// 2^7 = 128
// 2^8 = 256
// 2^9 = 512
// 2^10 = 1024
// ...

// Example:
// Convert 83_10 to a binary number
// From the table 64 is the highest number that does not exceed 83.

// 83 = 64 + 19

// and so on ...
// 19 = 16 + 3
// 3 = 2 + 1

// therefore:
// 83 = 64  + 16  + 2   + 1
//    = 2^6 + 2^4 + 2^1 + 2^0

// If the n exists then the factor is 1 otherwise is 0

//    = 1(2^6) + 0(2^5) + 1(2^4) + 0(2^3) + 0(2^2) + 1(2^1) + 1(2^0)
//    = 1010011_2

// Express 200_10 as a binary number
// 200 = 128 + 72
// 72 = 64 + 8

// 200 = 128 + 64 + 8
//     = 2^7 + 2^6 + 2^3
//     = 1(2^7) + 1(2^6) + 0(2^5) + 0(2^4) + 1(2^3) + 0(2^2) + 0(2^1) + 0(2^0)
//     = 11001000_2

// Another way to convert decimal numbers to binary nunmbers is to divinde by 2

// 83 / 2 = 41 r 1    1
// 41 / 2 = 20 r 1    1
// 20 / 2 = 10 r 0    0
// 10 / 2 = 5 r 0     0
// 5 / 2 = 2 r 1      1
// 2 / 2 = 1 r 0      0
// 1 / 2 = r r 1      1

// To obtain the binary numer we write out the remainder from the bottom to the top

// 83_10 = 1010011_2

// ## Octal System
// Octal numbers use 8 as a base
// 0, 1, 2, 3, 4, 5, 6, 7
// Example:
// 328_8 = 3(8^2)+ 2(8^1) + 5(8^0)
const octal = convertToDecimal('325', 8);
console.log({ octal });
