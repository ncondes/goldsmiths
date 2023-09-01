import { Stack } from '../classes/stack.js'
import { searchStack } from './searchStack.js'

export function checkColumn(puzzle, j) {
   const numbers = new Stack()
   // build stack with numbers 1-4
   for (let i = 1; i <= 4; i++) {
      numbers.push(i)
   }
   // check each row in column
   let k = 0
   // while k is less than 4 (the length of the column)
   while (k <= 3) {
      // select the row at index k, then select the column at index j
      const value = puzzle.select(j).select(k)
      // search the stack for the value
      const stack = searchStack(numbers, value)
      // if the value is not found, return false
      if (!stack) return false

      k++
   }
   // if all values are found, return true
   return true
}
