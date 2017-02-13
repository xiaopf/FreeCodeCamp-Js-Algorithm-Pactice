function binaryAgent(str) {
  var arr10=[];

  var arr=str.split(' ');

  for(var i=0;i<arr.length;i++){

  	var num10=0;
  		
  	for(var j=0;j<arr[i].length;j++){
  		num10+=parseInt(arr[i].charAt(j))*Math.pow(2,(arr[i].length-1-j));
  	}
  	arr10.push(num10);
  }


  str=arr10.map(function(item){
  	return String.fromCharCode(parseInt(item));
  }).join('');


  	




  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


