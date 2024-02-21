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

console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome());

function getNumbers(string = '') {
  const index = string.length - 1;
  let newString = '';
  for (let i = 0; i <= index; i++) {
    newString += parseInt(string.at(i), 10);
  }
  return newString;
}

console.log(getNumbers('2023 год'));
console.log(getNumbers('ECMAScript 2022'));
console.log(getNumbers('1 кефир, 0.5 батона'));
console.log(getNumbers('агент 007'));
console.log(getNumbers('а я томат'));

const extractNumber = (string = '') => Math.abs(parseInt(string.replace(/\D+/g, ''), 10));

console.log(extractNumber());
console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
