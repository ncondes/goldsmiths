// 4. on p.137, Self-assessment questions 12.6 and question 3 of exercise 12.6.

// SELF-ASSESSMENT QUESTIONS
// 1. Explain what is meant by an arithmetic series
// If the temrs of an arithmetic sequence are added, the result is known as an arithmetic series
// Example:
// The arithmetic progression with five terms having first term 4 and common difference 5 is: 4, 9, 14, 19, 24
// 4 + 9 + 14 + 19 + 24 = 70

// The sum of the first n terms of an arithmetic series with first term a and common difference d is denoted by S_n and given by:
// S_n = n/2 (2a + (n - 1)d)

// 2. Write down the formula for the sum of the first n terms of an arithmetic series.

// EXERCISES
// 1. Find the sum of the first 12 terms of the arithmetic series with first term 10 and common difference 8
let n; // terms
let a; // first term
let d; // difference
let sn; // arithmetic series

n = 12;
a = 10;
d = 8;

console.log(`S_n =  ${(n / 2) * (2 * a + (n - 1) * d)}`);
// 648

// 2. Find the sum of the first seven terms of the arithmetic series with first term -3 and common difference -2
n = 7;
a = -3;
d = -2;

console.log(`S_n =  ${(n / 2) * (2 * a + (n - 1) * d)}`);
// -63

// 3. The sum of an arithmetic series is 270. The common difference is 1 and the first term is 4. calculate the number of terms in the series
// 274

// 4. The sum of the first 15 terms of an arithmetic series is 165. The common difference is 2. Calculate the first term of the series.
sn = 165;
n = 15;
d = 2;

console.log(`a: = ${((2 * sn) / n - d * (n - 1 / 1)) / 2}`);
// -3

// 5. The sum of the first 13 terms of an arithmetic series is 0. The first terms is 3. Calculate the common difference.
sn = 0;
n = 13;
a = 3;

console.log(`a: = ${((2 * sn) / n - 2 * a) / (n - 1)}`);
// -0.5

// 6. The first term of an arithmetic series is 16. The 30th term is 100. Calculate S_30
// 7. Show that the sum of the first n terms of an arithmetic series, that is Sn, may be written as
// S_n = n/2 (fisr term + last term)
// 8. An arithmetic series has first term 2 and common difference 4. Calculate the sum of the 20th to the 40th terms inclusive.
