import {modalG, } from './modal.js';
import {alertError, } from './alertError.js';
import {IMC, notNumber,} from './utils.js';

//Variables
let form =  document.querySelector('form')
let inputHeigth = document.querySelector('#altura')
let inputWeigth = document.querySelector('#peso')

form.onsubmit = function(event){
    event.preventDefault()
    const heigth = inputHeigth.value
    const weigth   = inputWeigth.value

    const showAlertError = notNumber(heigth) || notNumber(weigth)
    if(showAlertError){
        alertError.open()
        // Fecha modal de erro quando digitado alguma coisa no input
        inputHeigth.oninput = () => alertError.close()
        inputWeigth.oninput = () => alertError.close()
        return;
    }
    alertError.close()
    const result = IMC(weigth, heigth)
    displayMessageResult(result)
}

function displayMessageResult(result){
    const message = (`Seu IMC é de ${result}`)
    modalG.modalMessage.innerHTML = message
    modalG.open()
    
}

export {inputHeigth, inputWeigth,}
