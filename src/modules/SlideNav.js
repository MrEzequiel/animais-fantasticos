import Slide from './Slide'

export default class SlideNav extends Slide {
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev)
    this.nextElement = document.querySelector(next)
    this.addArrowEvent()
    this.addControl()
  }

  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide)
    this.nextElement.addEventListener('click', this.activeNextSlide)
  }

  createControl() {
    const control = document.createElement('ul')
    control.dataset.control = 'slide'

    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href='#slide${index + 1}'>${
        index + 1
      }</a></li>`
    })

    this.container.appendChild(control)
    return control
  }

  eventControl(item, index) {
    item.addEventListener('click', e => {
      e.preventDefault()
      this.changeSlide(index)
      this.activeControlItem()
    })
    this.container.addEventListener('changeEvent', this.activeControlItem)
  }

  activeControlItem() {
    this.controlArray.forEach(item => item.classList.remove('active'))
    this.controlArray[this.index.active].classList.add('active')
  }

  addControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl()
    this.controlArray = [...this.control.children]

    this.activeControlItem()
    this.controlArray.forEach(this.eventControl)
  }
}
