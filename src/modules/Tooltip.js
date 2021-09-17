export const Tooltip = {
  tooltips: document.querySelectorAll('[data-tooltip]'),

  init() {
    this.tooltips.forEach(item => {
      item.addEventListener('mouseover', Tooltip.onMouseOver)
    })
  },

  onMouseOver(e) {
    const tooltipBox = Tooltip.createTooltipBox(this)
    tooltipBox.style.top = e.pageY + 20 + 'px'
    tooltipBox.style.left = e.pageX + 20 + 'px'

    Tooltip.onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', Tooltip.onMouseMove)

    Tooltip.onMouseLeave.tooltipBox = tooltipBox
    Tooltip.onMouseLeave.element = this
    this.addEventListener('mouseleave', Tooltip.onMouseLeave)
  },

  onMouseMove: {
    tooltipBox: '',
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + 'px'
      this.tooltipBox.style.left = e.pageX + 20 + 'px'
    }
  },

  onMouseLeave: {
    tooltipBox: '',
    element: '',
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', Tooltip.onMouseLeave)
      this.element.removeEventListener('mousemove', Tooltip.onMouseMove)
    }
  },

  createTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerHTML = text

    document.body.append(tooltipBox)
    return tooltipBox
  }
}
