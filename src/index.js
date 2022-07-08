import validator from './validator.js';

//Función que hace validación por algoritmo de Luhn
function ejecutarEvaluacion(e){
   
    const validationResult = validator.isValid();  // Se guarda el resultado de la función

    // Se muestra mensaje según resultado obtenido
    if(validationResult == true){
        document.getElementById('validation-ok').style.display="block";
    } else{
        document.querySelector('.form-input-card').classList.add('error');
    }
 }

//Función que enmascara número de tarjeta
function maskCard(e){
    const maskifyResult = validator.maskify();
    document.getElementById('creditCardNumber').value = maskifyResult;
}

document.getElementById('butVal').addEventListener('click', maskCard);

//Remueva el mensaje de error de input
document.getElementById('creditCardNumber').addEventListener('input',function(e){
    document.querySelector('.form-input-card').classList.remove('error');
    document.getElementById('validation-ok').style.display="none";
    validator.cardNumber = e.target.value;
})

 // Se ejecuta función al dar click al botón
 document.getElementById('butVal').addEventListener('click', ejecutarEvaluacion);
document.getElementById('butOriginal').addEventListener('click',function(e){
document.getElementById('creditCardNumber').value = validator.cardNumber;
})