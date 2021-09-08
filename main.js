const classActive = 'active'

// TAB NAVIGATIONS LIST IMAGES
function initTabNav() {
  const tabMenu = document.querySelectorAll('.animals-list li')
  const tabContent = document.querySelectorAll('.animals-descriptions section')

  function activateTab(index) {
    tabContent.forEach(content => {
      content.classList.remove(classActive)
    })

    tabContent[index].classList.add(classActive)
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', e => {
      tabMenu.forEach(item => {
        item.firstElementChild.classList.remove('select')
      })

      e.target.classList.add('select')
      activateTab(index)
    })
  })
}

// FAQ TOGGLE SELECT
function initAccordion() {
  const accordionList = document.querySelectorAll('.faq-list dt')

  function activateAccordion(e) {
    this.classList.toggle(classActive)
    this.nextElementSibling.classList.toggle(classActive)
  }

  accordionList.forEach(item => {
    item.addEventListener('click', activateAccordion)
  })
}

// SCROLL SMOOTH ON INTERNAL LINKS
function initScrollSmooth() {
  const internalLinks = document.querySelectorAll('.menu a[href^="#"]')

  function scrollToSection(e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    const sectionTop = section.offsetTop

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
  }

  internalLinks.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

function initAnimateScrollPage() {
  const sections = document.querySelectorAll('.js-scroll')
  const userScreenHeight = this.innerHeight * 0.6

  function animateScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = sectionTop - userScreenHeight < 0

      isSectionVisible
        ? section.classList.add(classActive)
        : section.classList.remove(classActive)
    })
  }

  this.addEventListener('scroll', animateScroll)
  animateScroll()
}

//INIT FUNCTIONS
initAccordion()
initTabNav()
initScrollSmooth()
initAnimateScrollPage()
