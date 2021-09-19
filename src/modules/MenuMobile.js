import outsideClick from './outsideClick.js'

export const Menu = {
  menuButton: document.querySelector('[data-menu="button"]'),
  menuList: document.querySelector('[data-menu="list"]'),
  events: ['click', 'touchstart'],

  init() {
    if (this.menuButton) {
      this.events.forEach(userEvent => {
        this.menuButton.addEventListener(userEvent, this.open)
      })
    }
  },
  open(e) {
    Menu.menuButton.classList.add('active')
    Menu.menuList.classList.add('active')

    outsideClick(Menu.menuList, Menu.events, () => {
      Menu.menuList.classList.add('anima')
      Menu.menuButton.classList.remove('active')

      setTimeout(() => {
        Menu.menuList.classList.remove('active')
        Menu.menuList.classList.remove('anima')
      }, 500)
    })
  }
}
