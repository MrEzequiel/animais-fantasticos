class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen)
    this.buttonClose = document.querySelector(buttonClose)
    this.containerModal = document.querySelector(containerModal)

    this.toggleModal = this.toggleModal.bind(this)
    this.clickOutside = this.clickOutside.bind(this)
  }

  addModalEvent() {
    this.buttonOpen.addEventListener('click', this.toggleModal)
    this.buttonClose.addEventListener('click', this.toggleModal)
    this.containerModal.addEventListener('click', this.clickOutside)
  }

  toggleModal() {
    if (this.containerModal.classList.contains('active')) {
      this.containerModal.classList.add('exit-animation')

      setTimeout(() => {
        this.containerModal.classList.remove('exit-animation')
        this.containerModal.classList.toggle('active')
      }, 300)

      return false
    }
    this.containerModal.classList.toggle('active')
    return true
  }

  clickOutside(e) {
    if (this.containerModal === e.target) {
      this.toggleModal()
    }
  }

  init() {
    if (this.buttonClose && this.buttonClose && this.containerModal) {
      this.addModalEvent()
    }
    return this
  }
}

export default Modal
