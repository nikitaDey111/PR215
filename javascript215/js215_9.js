function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const yearToCheck = 2024;
  console.log(isLeapYear(yearToCheck));
  