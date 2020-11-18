function reverse (str) {
    var letters = str.split('');
        letters.reverse();
    return letters.join('');
  }
  
  alert(reverse('c\'est une ligne inversée'));
  

var nombre=56789;
var result=0;
result=nombre%10;
nombre=nombre/10;
alert(result);

alert("123456789".split("").reverse().join(""));
