import { Stack } from '../classes/stack.js'
import { searchStack } from './searchStack.js'

export function checkGrids(puzzle) {
   for (let i = 0; i <= 2; i += 2) {
      for (let j = 0; j <= 2; j += 2) {
         if (!checkGrid(puzzle, i, j)) return false
      }
   }

   return true
}

function checkGrid(puzzle, i, j) {
   const numbers = new Stack()

   for (let i = 1; i <= 4; i++) {
      numbers.push(i)
   }

   let k = 0
   let l = 0

   for (let row = 0; row < i; row++) {
      for (let column = 0; column < j; column++) {
         const value = puzzle.select(row).select(column)
         const result = searchStack(numbers, value)

         if (!result) return false
      }
   }

   return true
}
