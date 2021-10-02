const Modal = {
  buttonOpen: document.querySelector('.button-login'),
  buttonClose: document.querySelector("[data-modal='close']"),
  containerModal: document.querySelector('[data-modal="conteiner"]'),

  init() {
    if (this.buttonClose && this.buttonClose && this.containerModal) {
      this.buttonOpen.addEventListener('click', this.toggleModal)
      this.buttonClose.addEventListener('click', this.toggleModal)
      this.containerModal.addEventListener('click', this.clickOutside)
    }
  },

  toggleModal() {
    if (Modal.containerModal.classList.contains('active')) {
      Modal.containerModal.classList.add('exit-animation')

      setTimeout(() => {
        Modal.containerModal.classList.remove('exit-animation')
        Modal.containerModal.classList.toggle('active')
      }, 300)

      return false
    }
    Modal.containerModal.classList.toggle('active')
    return true
  },
  clickOutside(e) {
    if (Modal.containerModal === e.target) {
      Modal.toggleModal()
    }
  }
}

export default Modal
