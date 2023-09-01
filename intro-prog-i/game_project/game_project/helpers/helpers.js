function characterIsCloseTo(element, distance = 30) {
   // distance is how close has to be the character to interact with the element
   return (
      dist(element.x + offset, element.y ?? floor.y, character.x, character.y) <
      distance
   );
}
