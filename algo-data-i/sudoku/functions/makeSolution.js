import { checkGrids } from './checkGrids.js'
import { colChecks } from './colChecks.js'
import { makeVector } from './makeVector.js'
import { permuteRows } from './permuteRows.js'

export function makeSolution(row) {
   // create puzzle without permuted rows
   const vector = makeVector(row)
   // initialize puzzle
   let puzzle
   // permute rows and find which permutation solves the puzzle
   const permutations = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
   ]

   for (let i = 0; i < permutations.length; i++) {
      puzzle = permuteRows(
         vector,
         permutations[i][0],
         permutations[i][1],
         permutations[i][2]
      )
      // check columns and grids
      const columns = colChecks(puzzle)
      const grids = checkGrids(puzzle)

      if (columns && grids) {
         return puzzle
      }
   }

   return 'No solution found.'
}

export function setBlankValues(puzzle, n) {
   let count = 0

   while (count < n) {
      // select random row and column
      let i = Math.floor(Math.random() * 4)
      let j = Math.floor(Math.random() * 4)

      if (puzzle.select(i).select(j) !== ' ') {
         // set value to blank
         puzzle.select(i).store(' ', j)
         count++
      }
   }

   return puzzle
}
