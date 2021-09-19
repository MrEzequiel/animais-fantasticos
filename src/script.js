import { Animation } from './modules/Animations.js'
import { Modal } from './modules/Modal.js'
import { Tooltip } from './modules/Tooltip.js'
import { DropdownMenu } from './modules/DropdownMenu.js'
import { Menu } from './modules/MenuMobile.js'
import { AnimationNumbers } from './modules/AnimationNumbers.js'

//INIT FUNCTIONS
Animation.initScrollSmooth()
Animation.initAnimateScrollPage()
Animation.initAccordion()
Animation.initTabNav()

//INIT MODAL
Modal.init()

//INIT TOOLTIP
Tooltip.init()

//DROPDOWN MENU INIT
DropdownMenu.init()

Menu.init()

AnimationNumbers.observer()
