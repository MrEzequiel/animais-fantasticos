export const Modal = {
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
      let delayModal = setTimeout(() => {
        Modal.containerModal.classList.remove('exit-animation')
        Modal.containerModal.classList.toggle('active')
        clearTimeout(delayModal)
      }, 300)
      return 0
    }
    Modal.containerModal.classList.toggle('active')
  },
  clickOutside(e) {
    if (Modal.containerModal === e.target) {
      Modal.toggleModal()
    }
  }
}