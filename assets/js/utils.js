//Verifica o IMC
export function IMC(weigth, heigth){
    return(weigth/ ((heigth / 100) **2)).toFixed(2)
}
//Verifica se o valor digitado é um número ou se está vazio
export function notNumber(value){
    return isNaN(value) || value == ""
}