export const DropdownMenu = {
  dropdownMenus: document.querySelectorAll('[data-dropdown]'),
  html: document.documentElement,
  dataOutside: 'data-outside',

  init() {
    this.dropdownMenus.forEach(menu => {
      menu.addEventListener('touchstart', DropdownMenu.handleClick)
      menu.addEventListener('click', DropdownMenu.handleClick)
    })
  },

  handleClick(e) {
    e.preventDefault()
    this.classList.add('active')

    DropdownMenu.outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  },

  outsideClick(element, events, callback) {
    const handleOutsideClick = e => {
      if (!element.contains(e.target)) {
        element.removeAttribute(DropdownMenu.dataOutside)

        events.forEach(userEvent => {
          DropdownMenu.html.removeEventListener('click', handleOutsideClick)
        })
        callback()
      }
    }

    if (!element.hasAttribute('outside')) {
      events.forEach(userEvent => {
        DropdownMenu.html.addEventListener(userEvent, handleOutsideClick)
      })

      element.setAttribute(DropdownMenu.dataOutside, '')
    }
  }
}
