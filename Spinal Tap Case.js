function spinalCase(str) {
	var strNew=str;
	var results=[];
    var pattern=/\s?[A-Z]|_?[A-Z]|\-?[A-Z]|\s+[a-z]?/g;

    var match=pattern.exec(str);

    while(match != null){
    	var letter=/[a-z]/.exec(match[0].trim().toLowerCase());
        strNew=strNew.replace(match[0],'-'+letter[0]);
	    match=pattern.exec(str);
    }

    if(strNew.charAt(0)=='-'){
    	return strNew.replace('-','');
    }else{
    	return strNew;
    }
    
}

spinalCase("Teletubbies say Eh-oh");

