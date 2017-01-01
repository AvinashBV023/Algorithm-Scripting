<!DOCTYPE html>
<html>
<body>




<script>


function convertToRoman(num) {
	var a=[],d;
    if(num>=1000)
    {
    d=parseInt(num/1000);
    alert(d);
    num=num%1000;
    alert(num);
    	if(d<4){
        	while(d--)
            {
            a.push('M');
            }
        
        }
        alert(a);
    }
      if(num>=100)
    {
    d=parseInt(num/100);
    alert(d);
    num=num%100;
    alert(num);
    	if(d<4)
        {
        	while(d--)
            {
            a.push('C');
            }
        
        }
        alert(a);
        	if(d==4)
        	a.push('CD');
            if(d==5)
        	a.push('D');
             if(d==9)
        	a.push('CM');
              alert(a);
            if(d>5 && d<9)
            {
            a.push('D');
        	while(d-- && d>4)
            {
            a.push('C');
            }
        alert(a);
            }
           
            
        
        
    }
    
    
        if(num>=10)
    {
    d=parseInt(num/10);
    alert(d);
    num=num%10;
    alert(num);
    	if(d<4)
        {
        	while(d--)
            {
            a.push('X');
            }
        
        }
        alert(a);
        	if(d==4)
        	a.push('XL');
            if(d==5)
        	a.push('L');
             if(d==9)
        	a.push('XC');
              alert(a);
            if(d>5 && d<9)
            {
            a.push('L');
        	while(d-- && d>4)
            {
            a.push('X');
            }
        alert(a);
            }
           
            
        
        
    }
    
    
    
        if(num>=1)
    {
   d=num;
   
    alert(num);
    	if(d<4)
        {
        	while(d--)
            {
            a.push('I');
            }
        
        }
        alert(a);
        	if(d==4)
        	a.push('IV');
            if(d==5)
        	a.push('V');
             if(d==9)
        	a.push('IX');
              alert(a);
            if(d>5 && d<9)
            {
            a.push('V');
        	while(d-- && d>4)
            {
            a.push('I');
            }
        alert(a);
            }
           
            
        
        
    }




a=a.join('');
alert(a);

}

convertToRoman(1565);

</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>




<script>



function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [],z,a=[];
  // Only change code below this line
  var l= collection.length;
  var y=Object.keys(source);
  alert(y);
  k=y.length;
  alert(k);
  
  for(var i=0;i<l;i++)
  {
  	for(var j=0;j<k;j++)
  {z=0;
  if(collection[i].hasOwnProperty(y[j])){
    z++; if()

  
  		}
  	
 
  }
  if(z==k)
  {
  a.push(arr[i]);
  }
  
  }
  	
  

  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });


</script>

</body>
</html>

function translatePigLatin(str) {
var i=0;
if(check(str[0]))
 return (str=str+'way');
while(!check(str[i]))
{
i+=1;
}
return (str=str.slice(i)+str.slice(0,i)+'ay');	
}
