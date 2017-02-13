function pair(str) {
  var arr=str.split('');
  var arr2=new Array();
  for(let i=0;i<arr.length;i++){
  	switch(arr[i]){
  		case 'A':
          arr2[i]=[arr[i],'T'];
  		break;
  		case 'T':
          arr2[i]=[arr[i],'A'];
  		break;
  		case 'C':
          arr2[i]=[arr[i],'G'];
  		break;
  		case 'G':
          arr2[i]=[arr[i],'C'];
  		break;
  	}
  }
  return arr2;
}

pair("GCG");