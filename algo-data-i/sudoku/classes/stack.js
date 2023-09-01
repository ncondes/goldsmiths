export class Stack {
   constructor() {
      this.items = []
   }
   // o: value
   push(o) {
      this.items.push(o)
   }

   pop() {
      return this.items.pop()
   }

   top() {
      return this.items[this.items.length - 1]
   }

   isEmpty() {
      return this.items.length == 0
   }
}
