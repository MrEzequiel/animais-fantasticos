export const Animation = {
  classActive: 'active',

  // SCROLL SMOOTH ON INTERNAL LINKS
  initScrollSmooth() {
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
  },

  //SCROLL ANIMATION
  initAnimateScrollPage() {
    const sections = document.querySelectorAll('.js-scroll')
    const userScreenHeight = window.innerHeight * 0.6

    function animateScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - userScreenHeight < 0

        isSectionVisible
          ? section.classList.add(Animation.classActive)
          : section.classList.remove(Animation.classActive)
      })
    }

    window.addEventListener('scroll', animateScroll)
    animateScroll()
  },

  // FAQ TOGGLE SELECT
  initAccordion() {
    const accordionList = document.querySelectorAll('.faq-list dt')

    function activateAccordion(e) {
      this.classList.toggle(Animation.classActive)
      this.nextElementSibling.classList.toggle(Animation.classActive)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activateAccordion)
    })
  },

  // TAB NAVIGATIONS LIST IMAGES
  initTabNav() {
    const tabMenu = document.querySelectorAll('.animals-list li')
    const tabContent = document.querySelectorAll(
      '.animals-descriptions section'
    )

    function activateTab(index) {
      tabContent.forEach(content => {
        content.classList.remove(Animation.classActive)
      })
      const animationDirection = tabContent[index].dataset.anime
      tabContent[index].classList.add(Animation.classActive, animationDirection)
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
}
