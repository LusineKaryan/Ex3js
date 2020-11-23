/*let string = prompt("Entrez un mot");

function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
      return 'yes';
    } else {
      return 'no';
    }
  }
  

  test = isPalindrome('abcdedcba');
  test2 = isPalindrome('abcded');

  console.log(test);
  console.log(test2);
  document.write('isPalindrome result: ' + 'str - ' + test + ' str2 - ' + test2);
  */

 /*function checkPalindrome(inputString) {

    if(inputString.length == 1){
        return true;
    }else{
        var i = 0;
        var j = inputString.length -1;
        while(i < j){
            if(inputString[i] != inputString[j]){
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
}*/

function checkPalindrome(palindrome) {
    var regex = /\W/g;
    var cedille = /ç/g;
    palindrome = palindrome.toLowerCase().replace(cedille,"c").replace(regex,"");
    if (palindrome == verif) {
        return palindrome + ' is palindrome.';
    }
    else {
        return palindrome + ' is not palindrome.';
    }
}

var resultat = checkPalindrome("Eh! ça vas la vache");
console.log(resultat);
