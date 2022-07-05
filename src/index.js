import validator from './validator.js';

//Función que hace validación por algoritmo de Luhn
function ejecutarEvaluacion(e){
    const input = document.querySelector("#creditCardNumber").value;  //Se guarda en varible el valor de input "creditCardNumber"
    let cardNumber = input.split('').reverse();  // Se guarda en el numero invertido en un arreglo
    const validationResult = validator.isValid(cardNumber);  // Se guarda el resultado de la función

    // Se muestra mensaje según resultado obtenido
    if(validationResult == true){
        document.getElementById("result-c").style.display="block";
        document.getElementById("result-w").style.display="none";
    } else{
        document.getElementById("result-c").style.display="none";
        document.getElementById("result-w").style.display="block";
    }
 }

 // Se ejecuta función al dar click al botón
document.getElementById('butVal').addEventListener('click', ejecutarEvaluacion);
console.log(validator);


//Función que enmascara número de tarjeta
function maskCard(e){
    let inputValue = Array.from(document.querySelector('#creditCardNumber').value);
    const maskifyResult = validator.maskify(inputValue);
}

//Se ejecuta función de enmascarar al dar click al botón
document.getElementById('butVal').addEventListener('click', maskCard);

console.log(maskCard);