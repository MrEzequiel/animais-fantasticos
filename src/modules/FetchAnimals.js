import AnimationNumbers from './AnimationNumbers.js'

const FetchAnimals = {
  async init() {
    try {
      const animalsResponse = await fetch('./animalsapi.json')
      const animalsJSON = await animalsResponse.json()

      const numbersGrid = document.querySelector('.numbers-grid')

      animalsJSON.forEach(animal => {
        const divAnimal = this.createAnimal(animal)
        numbersGrid.append(divAnimal)
      })

      AnimationNumbers.observer()
    } catch (e) {
      console.log(e)
    }
  },

  createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numbers-animal')

    div.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-number>${animal.total}</span>`

    return div
  }
}

export default FetchAnimals
