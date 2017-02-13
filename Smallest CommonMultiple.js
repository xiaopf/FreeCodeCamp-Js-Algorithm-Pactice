function smallestCommons(arr) {
  var min=Math.min.apply(null,arr);
  var max=Math.max.apply(null,arr);
  var mul=min;

  for(let i=(min+1);i<=max;i++){
  	 console.log(mul,i);
     mul=minMul(mul,i);
  }

  
  function minMul(a,b){
  	var argMin=Math.min(a,b);
  	var arr=[];
  	var i=2;
  	while(i<=argMin){
       if(a%i==0&&b%i==0){       
       	arr.push(i);
       	a/=i;
       	b/=i;
       	i=1;
       }
	   i++;
  	}
  	arr.push(a);
  	arr.push(b);
  	return arr.reduce(function(a1,a2){return a1*a2;});
  }
  return mul;
}


smallestCommons([1,5]);
