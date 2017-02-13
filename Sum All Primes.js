function sumPrimes(num) {
  
  if(num<2){
    return false;
  }else{
  	var arr=[2];

  	for(let i=3;i<=num;i++){
  	  arr.push(i);

      for(let j=2;j<i;j++){
      	if(i%j==0){
      	  arr.pop(i);
      	  break;	
      	}
      }
	}

  }
  
  return arr.reduce(function(a,b){return a+b;});
}

sumPrimes(2);
