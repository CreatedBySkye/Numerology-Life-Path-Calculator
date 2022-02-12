const sumDigits = (num) => {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  
  const lifePathNumber = (str) => {
    const dob = str.replace(/-/g, "");
    const masterNums = [11, 22, 33];
    let num = sumDigits(parseInt(dob));
  
    while (num.toString().length > 1 && masterNums.indexOf(num) < 0) {
      num = sumDigits(num);
    }
  
    return num;
  };
  
  module.exports = lifePathNumber;
  