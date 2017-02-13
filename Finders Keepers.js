
function find(arr, func) {
  var num = 0;

  arr=arr.filter(func);
  num=arr[0];
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });