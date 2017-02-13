function fearNotLetter(str) {
  var arr=[];
  for(let i=0;i<str.length;i++){
  	var diff=str.charCodeAt(i+1)-str.charCodeAt(i);
  	if(diff>=2){
      arr.push([i,diff]);
  	}
  }
console.log(arr);
  if(arr.length==0){
  	return undefined;
  }else{
  	var str2='';
  	for(let i=0;i<arr.length;i++){
		for(let j=0;j<(arr[i][1]-1);j++){
			str2+=String.fromCharCode(str.charCodeAt(arr[i][0])+j+1);
	  	}
  	}
  	return str2;
  	
  }
}
fearNotLetter("abce");
