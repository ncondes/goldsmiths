// What is modular arithmetic

// basic notion congruence between integers

// two numbers a and b are congruent 'mod 2'
// if they have the same remainder when divided by 2

// In general a congruent b (mod k) <=> a = nk + R, b = mk + R

// Example
// 3 congruent 5 (mod 2)

// since 3/2 = 1 with R = 1
// 5/2 = 2 with R = 1

// true the remainder is the same

// Familiar example: The clock

// if now it is 8 AM after t hours it will be 15 or 3 PM (it is 'mod 2')

// -> 15 congruent 3 (mod 12)

// 15/12 = 1 R = 3
// 3/12 = 0 R = 3

// mod k is used to map by congruence all integers to the subset of non-negative integers smaller than k that is Min_k = {0, 1, 2, ... k - 1}

// So in mod 12 we can map, by congruence, all integers to one of the integers in Min_12 = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}

// With negative integers when we divide by k we need to get a non-negative remainder

// Ex -17 mod 12

// you cannot do -17/12 = -1 with R = -5 negative (wrong)

// but -17/12 = -2 with R = 7 positive

// -17 congruent 7 (mod 12)

// Other way: -17 reverse sign -> 17 congruent 5 (mod 12) reverse sign to 5

// and add k (= 12) -5 + 12 = 7  -> -17 congruent 7 (mod 12)

// mod = modulus

// Other example:
// -12 (mod 5) -> 12 congruent 2 (mod 5) -> -2 + 5 = 3
// -> -12 congruent 3 (mod 5)

// What are the integers congruents to -1 (mod 3)
// ... congruent -4 congruent -1 congruent 2 congruent 5 congruent ... (mod 3)

// Example
// 23 what is the smallest congruent number mod 5 ?
// 23/5 = 4 with R = 3
// -> 23 congruent 3 (mod 5)

// 1101024 what is the smallest congruent number mod 5 ?
// 1101024 = 1101020 + 4 -> R = 4 -> 1101024 congruent 4 (mod 5)

// -2367 (mod 5) ? -> 2367/5 = 473 R = 2     -2 + 5 = 3
// -> -2367 contgruent 3 (mod 5)

// -2323 (mod 5) ? -> 2323/5 = 464 R = 3      -3 + 5 = 2
// ->  -2323 congruent 2 (mod 5)
