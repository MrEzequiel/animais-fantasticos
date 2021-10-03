import debounce from './debounce'

class ScrollPage {
  constructor(section, classActive) {
    this.sections = document.querySelectorAll(section)
    this.userScreenHeight = window.innerHeight * 0.5
    this.classActive = classActive

    this.checkDistance = debounce(this.checkDistance.bind(this), 100)
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.userScreenHeight)
      }
    })
  }

  checkDistance() {
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.classActive)
      } else if (item.element.classList.contains(this.classActive)) {
        item.element.classList.remove(this.classActive)
      }
    })
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }
}

export default ScrollPage
