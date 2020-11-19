function capitalize(str){

    var strArr = str.split(" ");
    var newArr = [];

    for(var i = 0 ; i < strArr.length ; i++ ){

      var FirstLetter = strArr[i].charAt(0).toUpperCase();
      var restOfWord = strArr[i].slice(1);

      newArr[i] = FirstLetter + restOfWord;

    }

    return newArr.join('all words in the string will be capitalized');

}