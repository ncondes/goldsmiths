export class Vector {
   constructor() {
      this.items = []
   }

   get length() {
      return this.items.length
   }
   // k: index
   select(k) {
      return this.items[k]
   }
   // o: value, k: index
   store(o, k) {
      this.items[k] = o
   }
   // k: index
   removeAt(k) {
      this.items.splice(k, 1)
   }
   // o: value, k: index
   insertAt(o, k) {
      this.items.splice(k, 0, o)
   }
}
