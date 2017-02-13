function steamroller(arr) {
  var rtArr=[];

  loop(arr);

  function loop(arrL){
  	arr=[];
  	for(let i=0;i<arrL.length;i++){
       if(Array.isArray(arrL[i])){
          arr.push(loop(arrL[i]));
       }else{
          rtArr.push(arrL[i]);
       }
    }
  }

  return rtArr;
}

steamroller([1, [2], [3, [[4]]]]);
