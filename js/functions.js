function checkStringLength(string, param) {
  if (string) {
    return string.length <= param;
  }
}

checkStringLength();

function isPalindrom(string) {
  if (string) {
    const newString = string.replaceAll(' ').toLowerCase();
    let reverseString = '';

    for (let i = newString.length - 1; i >= 0; i--) {
      const letter = newString[i];
      reverseString += letter;
    }
    return reverseString === newString;
  }
}

isPalindrom();

function getNumbers(string) {
  if (string) {
    const newString = string.toString();
    let result = '';
    for (let i = 0; i <= newString.length; i++) {
      if (Number.isNaN(parseInt(newString[i], 10)) === false) {
        result += newString[i];
      }
    }
    return result === '' ? NaN : Number(result);
  }
}

getNumbers();
