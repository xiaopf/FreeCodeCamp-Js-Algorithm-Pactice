function translate(str) {
  var firstLetter=str.charAt(0);
  if(firstLetter=='a'||firstLetter=='e'||firstLetter=='i'||firstLetter=='o'||firstLetter=='u'){
  	str+='way';
  }else{
    var arr=str.split('');
    for(let i=0;i<arr.length;i++){
    	if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'){
    		var arr1=arr.slice(0,i);
    		var arr2=arr.slice(i);
    		str=arr2.join('')+arr1.join('')+'ay';
    		break;
    	}
    } 
  	
  }

  return str;
}

translate("glove");