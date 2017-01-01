

var testWhite = function(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
};
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
  
str=str.toLowerCase();


   
   console.log(str);
  var l=str.length;
  var s=str;
  str= str.replaceAt(0, str[0].toUpperCase());
  for(i=0;i<l;i++){
  
   if(testWhite(str[i]))
   {
    var a=str[i+1];
   console.log(a);
   str= str.replaceAt(i+1, a.toUpperCase());
   }

}
return str;
 
}

titleCase("I'm a little tea pot");
