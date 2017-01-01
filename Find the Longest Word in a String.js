
function findLongestWord(str) {
  var s,k=0,j,i;
     var res = str.split(" ");
  var l= res.length;
  for(i=0;i<l;i++){
    j=res[i].length;
    if(k<j)
      k=j;
     
  
  }
  return k;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
