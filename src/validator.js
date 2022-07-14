const validator = {
  // CardNumber es un string vacío
  cardNumber: '', 

  //Método isValid
  isValid: function(input){
    if (input !== undefined){ // si la función es diferente de undefined input va a ser igual al valor de cardNumber 
      this.cardNumber = input
    }

    if(!this.cardNumber || this.cardNumber==='') return false; 

    let sum = 0
    let reverseNumber = this.cardNumber.split('').reverse();  // Se guarda en el numero invertido en un arreglo

    for(var i=0; i<reverseNumber.length; i++){

      let currentNumber= +reverseNumber[i];
      if (i%2 !=0){
        currentNumber *= 2;
          if (currentNumber>9){
            currentNumber= parseInt(String(currentNumber).charAt(0)) + parseInt(String(currentNumber).charAt(1))
          }
        }
      sum += currentNumber;
    }
    return sum%10 === 0; 
  },

  //Método Maskify
  maskify: function(input){

    if (input !== undefined){
      this.cardNumber = input
    }
    
    let lastDigits = this.cardNumber.substring(this.cardNumber.length - 4);
    const maskedNumber = lastDigits.padStart(this.cardNumber.length, '#');
    return maskedNumber;
  }
  
}

export default validator;