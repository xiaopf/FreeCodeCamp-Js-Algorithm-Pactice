function where(collection, source) {
  var arr = [];
  var sourceKey=[];
  var sourceValue=[];

  for(let src in source){
     sourceKey.push(src);
     sourceValue.push(source[src]);
  }

  for(let i=0;i<collection.length;i++){
    let colKey=[];
    let colValue=[];

    for(let item in collection[i]){
      colKey.push(item);
      colValue.push(collection[i][item]);
    }

    for(let j=0;j<sourceKey.length;j++){
      var pos=colKey.indexOf(sourceKey[j]);      
      if(pos==-1){
        console.log(i);
        collection[i]=null;
      }else{
        if(colValue[pos]!=sourceValue[j]){
          console.log(i);
          collection[i]=null;
        }
      }
    }
  }

  return collection.filter(function(it){return it!=null});
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) ;