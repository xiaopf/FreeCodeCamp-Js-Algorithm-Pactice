function convert(num) {
  
 var a=Math.floor(num/1000);
 var b=Math.floor(num%1000/100);
 var c=Math.floor(num%1000%100/10);
 var d=Math.floor(num%1000%100%10);
 var romanNum=[];
  
  getRoman(a,'D','M', 0 , 0 );
  getRoman(b,'L','C','D','M');
  getRoman(c,'V','X','L','C');
  getRoman(d, 0 ,'I','V','X');
  
 function getRoman(n,preRoman,roman,nextRoman,last){

  if(n<=3){
    for(let i=0;i<n;i++){
         romanNum.push(roman);    
    }
   }else if(n==4){ 
      romanNum.push(roman);
      romanNum.push(nextRoman);   
   }else if(n==5){ 
      romanNum.push(nextRoman);  
   }else if(n>=6&&n<=8){ 
      romanNum.push(nextRoman);
      for(let i=0;i<(n-5);i++){
         romanNum.push(roman);    
    }  
   }else if(n==9){ 
      for(let i=0;i<(10-n);i++){
         romanNum.push(roman);    
    } 
      romanNum.push(last);   
   }
  
 }
  
return romanNum.join('');
  
}
convert(9);



