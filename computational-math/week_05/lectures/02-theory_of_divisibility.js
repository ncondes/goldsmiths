// Section 1.2 Theory of divisibility pp.21-pp.24

// Theory of Divisibility
// Basic Concepts and Properties od Divisibility

// Definition 1.2.1
/**
 * Let a and b be integers with a != 0. We say a divides b,
 * denoted by a | b, if there exists an integer c such that b = ac. When a divides
 * b, we say that a is a divisor (or factor) of b, and b is a multiple of a.
 * If a does not divide b, we write a a |` b. If a | b and 0 < a < b, then a is called a proper divisor of b.
 */

// Remark 1.2.1
/**
 * We never use 0 as the left member of the pair of integers in
 * a | b, however, 0 may occur as the right member of the pair, thus a | 0 for
 * every integer a not zero. Under this restriction, for a | b, we may say that b is
 * divisible by a, which is equivalent to say that a is a divisor of b.
 * The notation a^alpha || b is sometimes used to indicate that a^alpha | b but a^(alpha + 1) |` b
 */

// Example 1.2.1
// The integer 200 has the following positive divisors (note that,
// as usual, we shall be only concerned with positive divisors, not negative divisors, of an integer):

// 1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 200

// Thus: De este modo
// Thus, for example, we can write

// 8 | 200,   50 | 200,   7 |` 200,   35 |` 200.

// Definition 1.2.2
/**
 * A divisor of n is called a trivial divisor of n if it is either 1 or n itself.
 * A divisor of n is called a nontrivial divisor if it is a divisor of n, but is neither 1 nor n.
 */

// Example 1.2.2
// For the integer 18, 1 and 18 are the trivial divisors, whereas 2, 3, 6 and 9 are nontrivial divisors
// The integer has only two trivial divisors and does not have any nontrivial divisors (prime number)

// Theorem 1.2.1
// Let a, b, and c be integers. Then

// (1) if a | b and a | c, then a | (b + c)
// (2) if a | b, then a | bc, for any integer c.
// (3) if a | b, and b | c, then a | c

// Exercise 1.2.1
// Let a, b and c be integers. Show that

// (1) 1 | a, a | a, a | 0
// (2) if a | b and b | a then a = +- b
// (3) if a | b and a | c, then for all integers m and n we have a | (mb + nc)
// (4) if a | b and a and b are positive integers, then a < b

// (1) Every number has the trivial divisor (1 and n) so  1 | a and a | a, are true considering a is positive
// (1) the result of any integer greater than 0 used in this formula: a | 0 is going to be 0

// (2) a | b -> b = ac, b | a -> a = bc
// b = ac   --- a = bc
// a = b/c --- a = bc
// b/c === bc
// Thus to make this statement true c should be 1 and a === b

// (3)
