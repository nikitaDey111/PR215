function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  

let colors = ['red', 'blue', 'green', 'yellow'];
console.log(getRandomElement(colors)); 