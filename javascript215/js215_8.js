
function sumDigits(number) {
    let sum = 0;
    
    let numStr = number.toString();

    for (let digit of numStr) {
      sum += parseInt(digit, 10); 
    }
    return sum;
  }
  
let number = 12345;
let result = sumDigits(number);
console.log(result);
  