import outsideClick from './outsideClick'

class Menu {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button)
    this.menuList = document.querySelector(list)

    if (events === undefined) {
      this.events = ['click', 'touchstart']
    } else {
      this.events = events
    }

    this.open = this.open.bind(this)
  }

  addEvent() {
    this.events.forEach(userEvent => {
      this.menuButton.addEventListener(userEvent, this.open)
    })
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent()
    }
    return this
  }

  open() {
    this.menuButton.classList.add('active')
    this.menuList.classList.add('active')

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.add('anima')
      this.menuButton.classList.remove('active')

      setTimeout(() => {
        this.menuList.classList.remove('active')
        this.menuList.classList.remove('anima')
      }, 500)
    })
  }
}

export default Menu
