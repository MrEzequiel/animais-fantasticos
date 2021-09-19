import outsideClick from './outsideClick.js'

export const DropdownMenu = {
  dropdownMenus: document.querySelectorAll('[data-dropdown]'),
  events: ['touchstart', 'click'],

  init() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.handleClick)
      })
    })
  },

  handleClick(e) {
    e.preventDefault()
    this.classList.add('active')

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
}
