function convert(str) {       
  var str2='';
  var arr=str.split('');
  for(let i=0;i<arr.length;i++){
  	switch(arr[i]){
  		case "&":
           str2+='&amp;';
  		break;
  		case "<":
           str2+='&lt;';
  		break;
  		case ">":
           str2+='&gt;';
  		break;
  		case '"':
           str2+='&quot;';
  		break;
  		case "'":
           str2+='&apos;';
  		break;
  		default:
           str2+=arr[i];
  		break;
  	}
  }
  return str2;
}

convert("Dolce & Gabbana");
