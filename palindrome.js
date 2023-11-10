 var n=2002;
 var sum = 0;
 var temp , remainder;
 temp=n;
 while(n!=0)
 {
    remainder  = n%10;
    sum = (sum*10)+remainder;
    n= parseInt(n/10);
 }
 if(temp==sum)
 {
    console.log( "palindrome");
 }else{
    console.log("not palindrome")
 }