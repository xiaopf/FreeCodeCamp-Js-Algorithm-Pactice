function sym(args) {

	var arrR=arguments[0];
	for(let j=1;j<arguments.length;j++){
		arrR=diff(arrR, arguments[j]);
	}

	return arrR.sort(function(a,b){return a-b;});


	function diff(arr1,arr2){

	    arr1=dropRepeat(arr1);
	    arr2=dropRepeat(arr2);
	  
	    var arrMin=(arr1.length<=arr2.length)?arr1:arr2;
	    var arrMax=(arr1.length>arr2.length)?arr1:arr2;

	    for(let i=0;i<arrMin.length;i++){
	  	  console.log(arrMin[i]);
	  	  var search=arrMax.indexOf(arrMin[i]);
	  	  if(search==-1){
	  		  arrMax.push(arrMin[i]);
	  	  }else{
	  		  arrMax[search]='x';
	  	  }
	    }

	    return arrMax.filter(function(it){return it!='x';});

	}

	function dropRepeat(arr){
		var arrN=[];
		for(let i=0;i<arr.length;i++){
			if(arrN.indexOf(arr[i])==-1){
				arrN.push(arr[i]);
			}
		}
		return arrN;
	}
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
