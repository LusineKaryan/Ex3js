
function Capitalize(str){
  var arr = str.split(" ");
  for(var i = 0; i< arr.length; i++){
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  var result = arr.join(" ");
  console.log(result);
}
  
Capitalize("la première lettre d'un mot en majuscule");
