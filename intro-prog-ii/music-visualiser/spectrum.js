class Spectrum {
   name = 'spectrum'

   draw() {
      push()

      noStroke()

      const spectrum = fourier.analyze()

      spectrum.forEach((value, i) => {
         const y = map(i, 0, spectrum.length, 0, height)
         const len = map(value, 0, 255, 0, width)
         const green = map(value, 0, 255, 255, 0)
         const red = value
         fill(red, green, 0)
         rect(0, y, len, height / spectrum.length)
      })

      pop()
   }
}
