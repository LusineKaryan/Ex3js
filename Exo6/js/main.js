
'use strict';

const findLongestWord = function(str) {
  if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
    return 'содержит посторонние символы!';
  }
  let arrStr = str.split(' ');
  let longestWord = arrStr[0];
  for (let i = 1; i < arrStr.length; i++) {
    if (arrStr[i].length > longestWord.length) {
      longestWord = arrStr[i];
    }
  }
  return longestWord;
};

// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a  gooooogle roll")
); 