// Geometric Sequence

// a x q^0, a x q^1, a x q^2, ...a x q^n

// With a = 0.1 mm and q = 2

// For n = 42: thickness = 0.1 x 2^42 mm
//       = 440000 Km

// Distance Moon - Earth: 384400 Km

// What is a Sequence

// Definition: given a set X a sequence is a function a: N -> X

// i. e. a set a(0), a(1), ... a(n) denoted with {a_n}_(nEN)

// Can be defined explicitly a_n = f(n)
// example: a_n = 2n + 1 -> 1, 3, 5, 7, 9

// Or by recursion i.e. a_n = f(a_(n-1), ... a_(n-k))

// Example 1: Arithmetic sequence a_n = q + a_(n-1)
// -> a_0, a_0 + q, a_0 + 2q, ... -> an = a_0 + n x q

// Example 2: Geometric sequence a_n = q x a_(n-1)
// -> a_0, a_0 x q1, a_0 x q^2, ...

// CONVERGENT
// A sequence is said to be convergent, when upon increasing n it approaches a finite constant value
// lim n -> infinite a_n = L < infinite

// Example: geometric seq. q < 1 -> q = 1/2
// 1/2, 1/4, 1/8 ... 1/64, ... converges to 0

// DIVERGENT
// A sequence is said to be divergent when increasing n it never reaches a constant finite value
// (either goes to infinite or oscillates)

// Example: geometric seq. q > 1 -> q = 2
// 2, 4, 8, 16, 32, ... 256, ... infinite

// Examples: Fibonaxxi Sequence
// Definition by recursion: a_0 = 0, a_1 = 1, a_n = a_(n-1) + a_(n-2)
// 0, 1, 1, 2, 3, 5, 8, 13 ...

// Golden Ratio :D
