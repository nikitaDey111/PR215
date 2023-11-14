function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  

let inputString = "hello world";
let result = capitalizeFirstLetterOfEachWord(inputString);
console.log(result);
  