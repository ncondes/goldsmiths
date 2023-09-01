import { Vector } from './classes/vector.js'
import { makeSolution, setBlankValues } from './functions/makeSolution.js'

// create initial vector
const row = new Vector()
// row.insertAt(2, 0)
// row.insertAt(4, 1)
// row.insertAt(1, 2)
// row.insertAt(3, 3)

row.insertAt(2, 0)
row.insertAt(3, 1)
row.insertAt(1, 2)
row.insertAt(4, 3)

// find solution
const puzzle = makeSolution(row)
// print solution
console.log(puzzle.select(0))
console.log(puzzle.select(1))
console.log(puzzle.select(2))
console.log(puzzle.select(3))

console.log('')

const blank = setBlankValues(puzzle, 4)
// print solution with blank spaces
console.log(blank.select(0))
console.log(blank.select(1))
console.log(blank.select(2))
console.log(blank.select(3))
