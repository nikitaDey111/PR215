function findDivisors(number) {
    let divisors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  
  let num = 12;
  let result = findDivisors(num);
  console.log(result);
  