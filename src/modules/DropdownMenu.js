import outsideClick from './outsideClick'

export default class DropdownMenu {
  constructor(el, events) {
    this.dropdownMenus = document.querySelectorAll(el)

    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  activeDropdownMenu(e) {
    e.preventDefault()
    const element = e.currentTarget

    element.classList.add('active')

    outsideClick(element, this.events, () => {
      element.classList.remove('active')
    })
  }

  addEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEvent()
    }
    return this
  }
}
