const {
   convertToDecimal,
   convertFromDecimal,
   getFractionBase,
} = require('../../helpers/conversions');

console.log(`Answer 1: ${convertToDecimal('10100', 2)}`);
console.log(`Answer 2: ${convertFromDecimal(222, 2)}`);
console.log(`Answer 3: ${convertFromDecimal(79, 2).length}`);
console.log(`Answer 4-1: ${convertFromDecimal(60, 2)}`);
console.log(`Answer 4-2: ${getFractionBase(0.75, 2)}`);
console.log(`Answer 8-1: ${convertFromDecimal(211, 16)}`);
console.log(`Answer 8-2: ${getFractionBase(0.125, 16)}`);
