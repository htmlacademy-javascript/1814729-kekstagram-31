function isStringLengthValid(string = '', stringMaxLength = 1) {
  const stringLength = string.length - 1;
  const compareStringLength = stringLength <= stringMaxLength;
  return compareStringLength;
}

console.log(isStringLengthValid('klwjxdwxdlkswnxowkojxdowjx', 25));
console.log(isStringLengthValid('klwjxdwxdlkswnxowkojxdowjx', 2));
console.log(isStringLengthValid('klwjxdwxdlkswnxowkojxdowjx', 200));

function isPalindrome(string = '') {
  const stringNormalize = string.toUpperCase().replaceAll(' ', '');
  let newString = '';
  const index = stringNormalize.length - 1;
  for (let i = index; i >= 0; i--) {
    newString += stringNormalize.at(i);
  }
  return newString === stringNormalize;
}

function getNumbers(string = '') {
  const index = string.length - 1;
  let newString = '';
  for (let i = 0; i <= index; i++) {
    newString += parseInt(string.at(i), 10);
  }
  return newString;
}

const extractNumber = (string = '') => Math.abs(parseInt(string.replace(/\D+/g, ''), 10));
