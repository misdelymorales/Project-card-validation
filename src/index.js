import validator from "./validator.js";

//Función que hace validación por algoritmo de Luhn
function ejecutarEvaluacion() {
  const validationResult = validator.isValid(); // Se guarda el resultado de la función

  // Se muestra mensaje según resultado obtenido
  if (validationResult == true) {
    document.getElementById("validation-ok").style.display = "block";
  } else {
    document.querySelector(".form-input-card").classList.add("error");
  }
  maskCard(); // se llama función maskCard
}

//Función que enmascara número de tarjeta
function maskCard() {
  const maskifyResult = validator.maskify();
  document.getElementById("creditCardNumber").value = maskifyResult;
}

//Función que lee valor del input, remueve el error del imput y mensaje de válido
function readInput(e) {
  document.querySelector(".form-input-card").classList.remove("error");
  document.getElementById("validation-ok").style.display = "none";
  const cleanCardNumber = e.target.value.replace(/\D/g, ""); //reemplazar cada uno de los no dígitos,
  validator.cardNumber = cleanCardNumber;
  document.getElementById("creditCardNumber").value = validator.cardNumber;
}

//Función muestra número original del input
function showOriginalNumber() {
  document.getElementById("creditCardNumber").value = validator.cardNumber;
}

document
  .getElementById("creditCardNumber")
  .addEventListener("input", readInput);

// Se ejecuta función al dar click al botón Validar
document.getElementById("butVal").addEventListener("click", ejecutarEvaluacion);

// Se ejecuta función al dar click al botón mostrar
document
  .getElementById("butOriginal")
  .addEventListener("click", showOriginalNumber);
