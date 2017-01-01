
function palindrome(str) {
  // Good luck!
  

  var s= str.replace(/[^A-Za-z0-9]/g, '');
 s=s.toLowerCase();
  s=s.split('');
   
  var l=s.length;
  var x=l;
for(var i=0;i<l/2;i++){
if(s[i]!=s[--x]){

 return false;
}
 
}

 return true;
}


palindrome("eye");
