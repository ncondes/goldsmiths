import { checkColumn } from './checkColumn.js'

export function colChecks(puzzle) {
   // check each column
   for (let i = 0; i < 4; i++) {
      // if any column is invalid, return false
      if (!checkColumn(puzzle, i)) return false
   }
   // if all columns are valid, return true
   return true
}
