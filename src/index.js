import validator from './validator.js';

//Función que hace validación por algoritmo de Luhn
function ejecutarEvaluacion(e){
   
    const validationResult = validator.isValid();  // Se guarda el resultado de la función

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

//Función que enmascara número de tarjeta
function maskCard(e){
    const maskifyResult = validator.maskify();
    console.log(maskifyResult);
    document.getElementById('creditCardNumber').value = maskifyResult;
}

document.getElementById('butVal').addEventListener('click', maskCard);

document.getElementById('creditCardNumber').addEventListener('input',function(e){
    validator.cardNumber = e.target.value;
})

document.getElementById('butOriginal').addEventListener('click',function(e){
document.getElementById('creditCardNumber').value = validator.cardNumber;
})