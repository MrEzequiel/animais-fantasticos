class AnimationNumbers {
  constructor(numbers, observerTarger, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget = document.querySelector(observerTarger)
    this.observerClass = observerClass

    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementNumber(number) {
    const total = +number.innerText
    const incre = Math.floor(total / 100)
    let start = 0

    const timer = setInterval(() => {
      start += incre
      number.innerText = `${start}`
      if (start > total) {
        number.innerText = total
        clearInterval(timer)
      }
    }, 30 * Math.random())
  }

  animation() {
    this.numbers.forEach(number => this.constructor.incrementNumber(number))
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observation.disconnect()
      this.animation()
    }
  }

  observer() {
    this.observation = new MutationObserver(this.handleMutation)
    this.observation.observe(this.observerTarget, { attributes: true })
  }

  init() {
    this.observer()
    return this
  }
}

export default AnimationNumbers
