function sumFibs(num) {

    var sumFib=[];
	if(num<1){
      return false;
	}else{
	  var fibs=[1,1];
	  var sum=2;
	  while(sum<=num){
		fibs.push(sum);
		sum+=fibs[fibs.length-2];
	  }
	  for(let i=0;i<fibs.length;i++){
	  	if(fibs[i]%2==1){
	  		sumFib.push(fibs[i]);
	  	}
	  }
	}
  return sumFib.reduce(function(a,b){return a+b;});
}

sumFibs(100);