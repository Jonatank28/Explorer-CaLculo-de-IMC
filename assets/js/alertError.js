export const alertError = {
    element: document.querySelector('.msgErro'),
    open() {
        alertError.element.classList.add('open')
    },
    close() {
        alertError.element.classList.remove('open')
    },
}