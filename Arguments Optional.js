function add() {
  for(let i=0;i<arguments.length;i++){
  	if((typeof arguments[i])!='number'){
  		return undefined;
  	};
  }


  if(arguments.length==2){
  	return arguments[0]+arguments[1];
  }else if(arguments.length==1){
  	var a1=arguments[0];
  	return function(num){
  		if((typeof num)!='number'){
	  		return undefined;
	  	}
        return a1+num;
  	};
  }


}

add(2,3);

