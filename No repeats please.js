function permAlone(str) {
    var arr=str.split('');
  
    var pattern=/a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|q{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}/;
    var strArr=sortArr(arr).map(function(it){return it.join('');}).filter(function(it){return !(pattern.test(it));});

    return strArr.length;

    function sortArr(arr){

	  	var arrLen=arr.length;
	    var saveArr=[];

		saveArr[0]=[arr[0],arr[1]];
		saveArr[1]=[arr[1],arr[0]];

		for (var i = 2; i < arrLen; i++) {  

		    var saveLen=saveArr.length;

			for (var k = 0; k <saveLen ; k++) {

			    var curArr=saveArr.shift();
			    var len=curArr.length;

				for(let j=0;j<len+1;j++){
			      
			    	curArr.splice(j,0,arr[i]);

			        var curArrFake=curArr.slice(0);
			    	saveArr.push(curArrFake);

			        curArr.splice(j,1);
			    }
			}
		}
	  	return saveArr;
    }

}

permAlone('aab');

