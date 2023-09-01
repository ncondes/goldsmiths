// Familiarise with notation for sequences: generic term a_n (or b_n ...)

// Find the 11th element of the following arithmetic sequence

// a_n = 15 + 3n (answer 45, n starts with 0)

// Geometric sequence a_n
// a_n = q x a_(n-1) -> a x q^0, a x q^1, a x q^2, ...a x q^n
// a_n = a_0 x q^n

// Find the 7th element of the folllowing geometric sequence:
// a_n = 1 x 3^n

// (always remember r starts with 0, so 7th element corresponds to n = ?)

// Series
// Consider again a generic sequence {a_n} with n = 0, 1, 2 ...
// we can look at the sum of its elements
// a_0, a_0 + a_1, a_0 + a_1 + a_2, ...

// These sums define another sequence {S_n} n = 0, 1, 2
// with S_n = a_0 + a_1 + ... a_n = s1 a_0, s1 = a_1, a_0

// {S_n} is called a series, it is a type of sequence that is obtained as sum of the elements of another sequence

// A series is also indicated with Σ -> S_n = Σ a_i (from i = 0 to n)

// Example: Given the arithmetic sequence a_n = a_0 + n x q
// can we find an explicit expression for S_n = Σ (k = 0, n) a_k ?

// (intermezzo) Mathematical induction principle:
// If a property is valid for n = 0 and if, assuming it is valid for n, it remains valid also for n + 1, then the property is valid for any n

// Prove using Mathematical Induction, that for the arithmetic sequence, the relative series
// S_n = Σ (k = 0, n) (a_0 + k x q) = (n + 1)(2 x a_0 + n x q) / 2  (*)
