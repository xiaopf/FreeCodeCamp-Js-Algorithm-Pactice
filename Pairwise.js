function pairwise(arr, arg) {

  var rt=0;
  for (var i = 0; i < arr.length; i++) {
    
  	var cur=arr[i];

  	for (var j = 0; j < arr.length; j++) {
  		if(arg==cur+arr[j]&&i<j){
          
           rt+=(i+j);
           
           arr.splice(i,1,'x');
           arr.splice(j,1,'x');
           
           break;
  		}
  	}

  }
  
  return rt;
}

pairwise([], 7);
