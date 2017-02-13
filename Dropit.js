function drop(arr, func) {

  while(func(arr[0])==false){
    arr.shift(arr[0]);
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
