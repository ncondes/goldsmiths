import { Vector } from '../classes/vector.js'
import { permuteVector } from './permuteVector.js'

export function permuteRows(puzzle, x, y, z) {
   // create new vector to hold permuted rows
   const vector = new Vector()
   // insert permuted rows into vector
   vector.insertAt(puzzle.select(0), 0)
   vector.insertAt(permuteVector(puzzle.select(1), x), 1)
   vector.insertAt(permuteVector(puzzle.select(2), y), 2)
   vector.insertAt(permuteVector(puzzle.select(3), z), 3)
   // return permuted vector
   return vector
}
