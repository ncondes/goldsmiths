// 1. on p.129, Self-assessment questions 12.2 and questions 3 and 4 of Exercise 12.2

// SELF-ASSESSMENT QUESTIONS
// 1. What is meant by an arithmetic progression ?

// A particularly simple way of forming a sequence is to calculate each new term by adding a fixed amount of the previous term.
// 1, 7, 13, 19 ...
// Such a sequence is called an arithmetic progression or arithmetic sequence.
// The fixed amount that is added each time is a constant called the common difference

// 2. Give an example of a sequence that is an arithmetic progression.
// a(n) = n + 1, n_0 = 0
// 1, 2, 3, 4, 5

// 2. Give an example of a sequence that is not an arithmetic progression.
// a(5) = 5
// 5, 5, 5, 5

// EXERCISES
// 1. Write down the first five terms of the arithmetic progression with common difference 4 and first term 1.
// 1, 5, 9, 13, 17

// 2. Write down the first six terms of the arithmetic progression with common difference -1 and first term 3.
// 3, 2, 1, 0, -1

// 3. Find the 16th term of the arithmetic sequence with first term 2 and common difference 5.
let n = 2;
for (let i = 0; i < 16; i++) {
   n = n + 5;
}
console.log({ n });
// 82

// 4. Find the 23rd term of the arithmetic progression with first term 11 and common difference -3.
let m = 11;
for (let i = 0; i < 16; i++) {
   m = m - 3;
}
console.log({ m });
// -37
