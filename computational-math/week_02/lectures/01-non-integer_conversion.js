// Example

const {
   getFractionBase,
   convertFromDecimal,
} = require('../../helpers/conversions');

// 17.375_10 = 1 x 10^1 + 7 x 10^0 + 3 x 10^-1 + 7 x 10^-2 + 5 x 10^-3
//           = 10       + 7        + 3/10      + 7/100     + 5/1000

// How to convert to binary ?
// integer part
// 17_10 = 10001_2

// Separate integer part 17 and fractional part 0.375

// operation                             remainder
// 0.375 x base (2) = 0.75 = 0 r 0.75       0
// 0.75 x base (2) = 1.5 = 1 r 0.5          1
// 0.5 x base (2) = 1.0 = 1 r 0             1

// 17.375_10 = 10001.011_2

// Binary to decimal example:
// 1101.101_2   = 1 x 2^3 + 1 x 2^2 + 0 x 2^1 + 1 x 2^0 +
// decimal part = 1 x 2^-1 + 0 x 2^-2 + 1 x 2^-3
//              = 8 + 4 + 1 + 1/2 + 1/8 = 13.625_10
// (Positional value of digits)

// In general a_n a_(n-1) a_(n-2) ... a_0. c_(-1) c_(-2) in base b

// In decimal units corresponds to

// a_n x b^n + a_(n-1) x b^(n-1) + ... + a_0 x b^0 +
// c_(-1) x b^(-1) + c_(-2) x b^(-2) + ... + c_(-k) x b^(-k)

const integer = convertFromDecimal(15, 2);
const fraction = getFractionBase(0.65, 2);
console.log({ integer, fraction });
