import { Queue } from '../classes/queue.js'
import { Vector } from '../classes/vector.js'

export function permuteVector(row, p) {
   if (p === 0) return row
   // create new queue
   const queue = new Queue()
   // enqueue each item in row
   for (let i = 0; i < row.length; i++) {
      queue.enqueue(row.select(i))
   }
   // rotate queue
   for (let i = 0; i < p; i++) {
      queue.enqueue(queue.dequeue())
   }
   // convert back queue to vector
   return vectorFromQueue(queue)
}

function vectorFromQueue(queue) {
   const vector = new Vector()
   // enqueue each item in the vector
   for (let i = 0; i < 4; i++) {
      vector.insertAt(queue.dequeue(), i)
   }

   return vector
}
