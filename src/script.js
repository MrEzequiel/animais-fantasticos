import Animation from './modules/Animations'
import ScrollPage from './modules/ScrollPage'
import Modal from './modules/Modal'
import Tooltip from './modules/Tooltip'
import DropdownMenu from './modules/DropdownMenu'
import Menu from './modules/MenuMobile'
import Operation from './modules/Operation'
import FetchAnimals from './modules/FetchAnimals'
import FetchBTC from './modules/FetchBTC'

//  INIT FUNCTIONS
Animation.initScrollSmooth()
Animation.initAccordion()
Animation.initTabNav()

//  INIT MODAL
const modal = new Modal(
  '.button-login',
  "[data-modal='close']",
  "[data-modal='container']"
)
modal.init()

//  INIT TOOLTIP
const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const scrollPage = new ScrollPage('.js-scroll', 'active')
scrollPage.init()

//  DROPDOWN MENU INIT
const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()
console.log(dropdownMenu)

const menuMobile = new Menu('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

Operation.init()
FetchAnimals.init()
FetchBTC.init()
