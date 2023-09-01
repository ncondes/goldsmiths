import { Stack } from '../classes/stack.js'
import { Vector } from '../classes/vector.js'

// return false if item is not found
// return stack with item removed if item is found

export function searchStack(stack, item) {
   const holder = new Stack()
   let found = false

   while (!stack.isEmpty()) {
      // get element from stack
      const element = stack.pop()
      // if element is equal to item, set found to true and break
      if (element === item) {
         found = true
         break
      }

      holder.push(element)
   }
   // put elements back into stack
   while (!holder.isEmpty()) {
      stack.push(holder.pop())
   }
   // if item is found, return stack
   if (found) return stack

   // return false if item is not found
   return false
}
