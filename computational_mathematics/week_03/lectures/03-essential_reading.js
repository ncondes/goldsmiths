// 2. on pp.131–2, Self-assessment questions 12.3 and question 3 of Exercise 12.3

// SELF-ASSESSMENT QUESTIONS
// 1. Explain what is meant by a geometric sequence ?

// Calculate each new term by multiplying the previous term by a fixed amount.
// 2, 10, 50, 50, 250
// Such a sequence is called geometric sequence or geometric progression.
// The fixed amount by which each term is multiplied is called the common ratio.

// 2. Give one example of a sequence that is a geometric sequence and one that is not.
// YES
// s(n) = 5 x (n - 1), n_0 = 2
// 2, 10, 50, 250

// NO
// a(n) = n + 1, n_0 = 0
// 1, 2, 3, 4, 5

// 3. What can you say about the terms of a geometric progression when the common ratio is 1 ?
// Positive constant + + + +

// 4. What can you say about the terms of a geometric progression when the common ratio is -1 ?
// Negative constant & Positive constant + - + - + - +

// EXERCISES
// 1. Write down the first four terms of the geometric sequence with first term 8 and common ratio 3
// 8, 24, 72, 216, 648

// 2. Write down the first four terms of the geometric sequence with first term 1/4 and common ratio 4/5
// 1/4, 1/5, 4/25, 16/125, 64/625

// 3. A geometric sequence has first term 4 and common ratio 2.
//    a) Find the 5th term
//    b) Find the 11th term
let g = 4;
for (let i = 0; i < 11; i++) {
   g *= 2;
   if (i === 4 || i === 10) {
      console.log({ g });
   }
}
// 128, 8192

// 4. A geometric progression is given by 2, -1, 1/2, 1/4, what is its common ratio ?
// -2;
