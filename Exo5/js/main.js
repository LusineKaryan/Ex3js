/*function capitalize(str){
    
    var strArr = str.split(" ");
    var newArr = [];

    for(var i = 0 ; i < strArr.length ; i++ ){

      var FirstLetter = strArr[i].charAt(0).toUpperCase();
      var restOfWord = strArr[i].slice(1);

      newArr[i] = FirstLetter + restOfWord;

    }

    return newArr.join('');

}*/

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();     
    }
       str = splitStr.join(' '); 
  }
 return str;
 }
 
 titleCase("I'm a little tea pot");