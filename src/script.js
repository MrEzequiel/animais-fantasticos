import Animation from './modules/Animations.js'
import Modal from './modules/Modal.js'
import Tooltip from './modules/Tooltip.js'
import DropdownMenu from './modules/DropdownMenu.js'
import Menu from './modules/MenuMobile.js'
import Operation from './modules/Operation.js'
import FetchAnimals from './modules/FetchAnimals.js'
import FetchBTC from './modules/FetchBTC.js'

//  INIT FUNCTIONS
Animation.initScrollSmooth()
Animation.initAnimateScrollPage()
Animation.initAccordion()
Animation.initTabNav()

//  INIT MODAL
Modal.init()

//  INIT TOOLTIP
Tooltip.init()

//  DROPDOWN MENU INIT
DropdownMenu.init()
Menu.init()
Operation.init()
FetchAnimals.init()
FetchBTC.init()
