function makeFriendlyDates(arr) {

    var arr1=arr[0].split('-');
    var arr2=arr[1].split('-');
    
    var diffYear=Date.parse(getDate(arr1,false))-Date.parse(getDate(arr2,false));

	if(arr[0]==arr[1]){return [getDate(arr1,true)];};

    if(Math.abs(diffYear)<31536000000){

    	if(arr1[0]==arr2[0]){
			arr2[0]='';
	        if(arr1[1]==arr2[1]){
				arr1[0]='';
		        arr2[0]='';
	            arr2[1]='x';
	        }
	   
    	}else{
            arr2[0]='';
            if(arr1[1]>arr2[1]){
	        	arr1[0]='';
		        arr2[0]=''; 
	        }
    	}
	}

    return [getDate(arr1,true),getDate(arr2,true)];



	function getDate(arr,sty){

		var mjson1={
		 	'01':'January ',   '02':'February ',   '03':'March '    ,
			'04':'April '  ,   '05':'May '     ,   '06':'June '     ,
			'07':'July '   ,   '08':'August '  ,   '09':'September ',
			'10':'October ',   '11':'November ',   '12':'December ' ,  'x':'' };
		var mjson2={
		 	'01':'Jan ',   '02':'Feb ',   '03':'Mar ','04':'Apr ',   '05':'May ',   '06':'Jun ',
			'07':'Jul ',   '08':'Aug ',   '09':'Sep ','10':'Oct ',   '11':'Nov ',   '12':'Dec ', };

        var mjson=(sty)?mjson1:mjson2;

        var month=mjson[arr[1]];

        switch(parseInt(arr[2])){
        	case 1:
        	  var day=parseInt(arr[2])+'st';
        	    break;
        	case 2:
        	  var day=parseInt(arr[2])+'nd';
        	    break;
        	case 3:
        	  var day=parseInt(arr[2])+'rd';
        	    break;

        	default:
        	  var day=parseInt(arr[2])+'th';
        	    break;
        }
        
		var year=(arr[0])?', '+arr[0]:arr[0];

        if(sty){
        	return month+day+year;
        }else{
        	return month+parseInt(arr[2])+year;
        }
		
	}

}

makeFriendlyDates(["2016-07-01", "2016-07-04"]) ;


