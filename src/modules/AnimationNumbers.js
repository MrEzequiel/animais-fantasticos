const AnimationNumbers = {
  init() {
    const numbers = document.querySelectorAll('[data-number]')

    numbers.forEach(number => {
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
    })
  },

  observer() {
    let observation
    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains('active')) {
        observation.disconnect()
        AnimationNumbers.init()
      }
    }

    const observerTarget = document.querySelector('.numbers')
    observation = new MutationObserver(handleMutation)

    observation.observe(observerTarget, { attributes: true })
  }
}

export default AnimationNumbers
