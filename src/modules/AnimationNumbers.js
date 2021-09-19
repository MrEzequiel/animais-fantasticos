export const AnimationNumbers = {
  init() {
    const numbers = document.querySelectorAll('[data-number]')

    numbers.forEach(number => {
      const total = +number.innerText
      const incre = Math.floor(total / 100)
      let start = 0

      const timer = setInterval(() => {
        number.innerText = `${start}`
        start += incre
        if (start > total) {
          number.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  },

  observer() {
    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains('active')) {
        observation.disconnect()
        AnimationNumbers.init()
      }
    }

    const observerTarget = document.querySelector('.numbers')
    const observation = new MutationObserver(handleMutation)

    observation.observe(observerTarget, { attributes: true })
  }
}
