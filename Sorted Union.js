function unite(arr1, arr2, arr3) {
  for(let i=1;i<arguments.length;i++){
     sort(arguments[i]);
  }



  function sort(arr){
      for(let i=0;i<arr.length;i++){
      	let item=arr1.indexOf(arr[i]);
      	if(item==-1){
      		arr1.push(arr[i]);
      	}
      }
  }




  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
