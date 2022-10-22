import { inputHeigth, inputWeigth, } from "./main.js"

export const modalG = {
    modal: document.querySelector('.modal'),
    modalMessage: document.querySelector('.modal h2'),
    modalBtnClose: document.querySelector('.closeModal'),
    open() {
            modalG.modal.classList.add('open')
    },
    close() {
        modalG.modal.classList.remove('open')
        inputHeigth.value = ""
        inputWeigth.value = ""
        inputWeigth.focus()
    }
}

modalG.modalBtnClose.onclick = () => {
    modalG.close()
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalG.close()
    }
})



