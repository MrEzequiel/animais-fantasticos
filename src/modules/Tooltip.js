class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips)

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  addTooltipEvent() {
    this.tooltips.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget)

    currentTarget.addEventListener('mousemove', this.onMouseMove)
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`

    if (e.pageX + 260 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove()
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerHTML = text

    document.body.append(tooltipBox)
    this.tooltipBox = tooltipBox
  }

  init() {
    this.addTooltipEvent()
    return this
  }
}

export default Tooltip
