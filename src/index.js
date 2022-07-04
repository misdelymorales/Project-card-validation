import validator from './validator.js';

function ejecutarEvaluacion(e){
    const input = document.querySelector("#creditCardNumber").value;
    let cardNumber = input.split('').reverse();
    const validationResult = validator.isValid(cardNumber);
 }

document.getElementById('butVal').addEventListener('click', ejecutarEvaluacion)
console.log(validator);
