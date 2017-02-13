function checkCashRegister(price, cash, cid) {

    var change=cash-price;
	var change100=change*100;

    var arrDoller=[0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00];
    var arrDoller100=arrDoller.map(function(it){return it*100;});

    var nowHave=[];
    var use=[];
	var diff=[];

	var len=arrDoller.length;

    for (var i = 0; i < len; i++) {
  	    nowHave[i]=parseInt(cid[i][1]/arrDoller[i]);
    };

    for(let j=0;j<len;j++){
	    var n=Math.floor(change100/arrDoller100[len-1-j]);
	    if(n>nowHave[len-1-j]){
			use.unshift(nowHave[len-1-j]);
			change100=change100-nowHave[len-1-j]*arrDoller100[len-1-j];
	    }else{
	        use.unshift(n);
			change100=change100%arrDoller100[len-1-j];
	    }
    };
    
    for (var k = 0; k < len; k++) {
  	    diff[k]=nowHave[k]-use[k];
  	    cid[k][1]=(use[k]*arrDoller[k]);
    }

    if(change100>0){
  	    return  "Insufficient Funds";
    }else if(diff.every(function(it){return it==0;})){
  	    return  "Closed";
    }else{
        return cid.filter(function(it){return it[1]!=0;}).sort(function(a,b){return b[1]-a[1];});
    }
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);