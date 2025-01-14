// Addition

// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 10

// Example: 101_2 + 111_2 = ?
// Similar to decimal sum in column divive by two carry over quotient and take the remainder

//   1 1
//   1 0 1
// + 1 1 1
// -------
// 1 1 0 0

// 101_2 = 111_2 = 1100_2 in decimal 5 + 7 = 12

// Example: 1010011 + 1110110 = ?

//   1 1   1 1
//   1 0 1 0 0 1 1
// + 1 1 1 0 1 1 0
// ---------------
// 1 1 0 0 1 0 0 1

// 1010011_2 = 83 + 1110110_2 = 118  => 118 + 83 = 11001001_2 = 201

// Substraction

// 0 - 0 = 0
// 0 - 1 = 1 (Borrow 1 from the next high order digit)
// 1 - 0 = 1
// 1 - 1 = 0

// Example: 110_2 - 101_2 = ?

//       2
//   1 1 0
// - 1 0 1
// -------
//   0 0 1

// 110 - 101 = 001

// Example: 1110011 - 1010011 = ?

//
//   1 1 1 0 0 1 1
// - 1 0 1 0 0 1 1
// ---------------
//   0 1 0 0 0 0 0

// 115 - 83 = 32

// Multiplication

// 0 × 0 = 0
// 0 × 1 = 0
// 1 × 0 = 0
// 1 × 1 = 1

// Example: 1100_2 x 1111_2 ?

//          1 1 0 0
//        x 1 1 1 1
// ----------------
//          1 1 0 0
//        1 1 0 0
//      1 1 0 0
//    1 1 0 0
// ----------------
//  1 0 1 1 0 1 0 0

// Division

// Example 11100110_2 / 110_2

// Result = 100110

//   1 1 0 0 1
// -   1 0 0 1
// -----------
//   1 0 0 0 0
