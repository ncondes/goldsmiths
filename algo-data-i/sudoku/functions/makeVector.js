import { Vector } from '../classes/vector.js'

export function makeVector(row) {
   const puzzle = new Vector()

   for (let i = 0; i < 4; i++) {
      puzzle.insertAt(row, 2)
   }

   return puzzle
}
