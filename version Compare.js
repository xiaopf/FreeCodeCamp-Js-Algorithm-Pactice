function compareVersion(v1,v2){
	if(v1==v2){return v1};
	var arr1=v1.split('.');
	var arr2=v2.split('.');
	var length=(arr1.length>arr2.length)?arr2.length:arr1.length;
	var compare;
	for(var i=0;i<length;i++){
		compare=arr1[i]-arr2[i];  
		if(compare>0){
			return v1;
		}
		else if(compare<0){
            return v2;
		}else if(compare==0){
			continue;
		}
	}
	return (arr1.length>arr2.length)?v1:v2;
}

var a1=compareVersion('2.6.3','3.6.3');//主版本号比较
var a2=compareVersion('3.5.2','3.6.2');//子版本号比较
var a3=compareVersion('3.6.2','3.6.1');//修正版本号比较
var a4=compareVersion('3.6','3.6.3');//不等长版本号比较
var a5=compareVersion('3.7','3.6.3');//不等长版本号比较

console.log(a1);//3.6.3
console.log(a2);//3.6.2
console.log(a3);//3.6.2
console.log(a4);//3.6.3
console.log(a5);//3.7


