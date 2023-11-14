function sumArrayElements(arr) {
    let sum = 0;
    for (let element of arr) {
      sum += element;
    }
    return sum;
  }
let array = [1, 2, 3, 4, 5];
let result = sumArrayElements(array);
console.log(result);
  