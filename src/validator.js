const validator = {
  
  //Método isValid
  // El valor de cardNumber entra como un arreglo ordenado y depurado
  isValid: function(cardNumber){
    let sum = 0

    for(var i=0; i<cardNumber.length; i++){

      let currentNumber= +cardNumber[i];
      if (i%2 !=0){
        currentNumber *= 2;
          if (currentNumber>9){
            currentNumber= parseInt(String(currentNumber).charAt(0)) + parseInt(String(currentNumber).charAt(1))
          }
        }
      sum += currentNumber;
    }
    return sum%10 === 0; 
  }

  //Método Maskify
  maskify: function(inputValue){

    const fullNumber = inputValue;
    let lastDigits = fullNumber.slice(-4);
    let maskedNumber = lastDigits.padStart(fullNumber.length, '*');
  }
  return maskedNumber.join('');
console.log(maskedNumber);
}

export default validator;