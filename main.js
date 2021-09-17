import { Animation } from './src/modules/Animations.js'
import { Modal } from './src/modules/Modal.js'
import { Tooltip } from './src/modules/Tooltip.js'
import { DropdownMenu } from './src/modules/DropdownMenu.js'

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
