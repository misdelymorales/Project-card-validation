const validator = {
  
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
   
};

export default validator;