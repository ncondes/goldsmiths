const hexadecimals = {
   0: 0,
   1: 1,
   2: 2,
   3: 3,
   4: 4,
   5: 5,
   6: 6,
   7: 7,
   8: 8,
   9: 9,
   A: 10,
   B: 11,
   C: 12,
   D: 13,
   E: 14,
   F: 15,
};

const values = Object.entries(hexadecimals);
const bases = [2, 5, 8, 16];

/**
 * Converts a number from binary, octal or hexadecimal base to decimal base
 * @param number number to be converted either binary or hexadecimal as a string
 * @param base base of the number
 */
const convertToDecimal = (number, base) => {
   if (typeof number !== 'string') {
      throw new Error('parameter number type should be a string');
   }

   if (!bases.includes(base)) {
      throw new Error('enter a valid base' + bases);
   }

   let n = number.length - 1;

   return number.split('').reduce((acc, curr) => {
      const operation = Number(hexadecimals[curr]) * Math.pow(base, n);
      acc += operation;
      n--;
      return acc;
   }, 0);
};

/**
 * Converts a number from decimal to binay, octal or hexadecimal
 * @param number decimal number as a number type
 * @param base base of the number
 */
const convertFromDecimal = (number, base) => {
   // this function uses the division technique
   if (typeof number !== 'number') {
      throw new Error('parameter number type should be a number');
   }

   if (!bases.includes(base)) {
      throw new Error('enter a valid base' + bases);
   }

   const remainders = [];
   let quotient = number;

   while (quotient !== 0) {
      const remainder = Math.floor(quotient % base);
      const [hex] = values.find((item) => item[1] === remainder);
      remainders.unshift(hex);
      quotient = Math.floor(quotient / base);
   }

   return remainders.join('');
};

const getFractionBase = (number, base) => {
   // 0.number
   if (typeof number !== 'number') {
      throw new Error('parameter number type should be a number');
   }

   if (!bases.includes(base)) {
      throw new Error('enter a valid base' + bases);
   }

   const remainders = [];
   let quotient = number;
   while (quotient !== 0) {
      const remainder = Math.floor(quotient * base);
      const [hex] = values.find((item) => item[1] === remainder);
      remainders.push(hex);
      quotient = quotient * base - Math.floor(quotient * base);

      if (remainders.length === 5) break;
   }

   return `0.${remainders.join('')}`;
};

module.exports = {
   convertToDecimal,
   convertFromDecimal,
   getFractionBase,
};
