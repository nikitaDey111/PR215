function secondsToDays(seconds) {
    let days = seconds / (60 * 60 * 24);
    return days;
  }
  
console.log(secondsToDays(86400));
console.log(secondsToDays(172800));