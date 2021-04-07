function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function(str) {
      if (longest < str.length) {
          longest = str.length;
          word = str;
      }
  });
  return word;
}
console.log(longestWord("le plus grand mot"));
document.write(longestWord("le plus grand mot"))


let family = {
  self: 'Sébastien',
  sister: 'Laurence',
  brother: 'Ludovic',
  cousin_1: 'Pauline',
  cousin_2: 'Guillaume'
  }

let id = 'brother';
alert(family[id]); // Affiche : « Laurence »



