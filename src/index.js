import validator from './validator.js';

function ejecutarEvaluacion(e){
    const input = document.querySelector("#creditCardNumber").value;
    let cardNumber = input.split('').reverse();
    const validationResult = validator.isValid(cardNumber);

    if(validationResult == true){
        document.getElementById("result-c").style.display="block";
        document.getElementById("result-w").style.display="none";
    } else{
        document.getElementById("result-c").style.display="none";
        document.getElementById("result-w").style.display="block";
    }
 }

document.getElementById('butVal').addEventListener('click', ejecutarEvaluacion)
console.log(validator);

