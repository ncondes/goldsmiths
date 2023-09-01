export class Queue {
   constructor() {
      this.items = []
   }
   dequeue() {
      return this.items.shift()
   }
   // o: value
   enqueue(o) {
      this.items.push(o)
   }

   head() {
      return this.items[0]
   }

   isEmpty() {
      return this.items.length === 0
   }
}
