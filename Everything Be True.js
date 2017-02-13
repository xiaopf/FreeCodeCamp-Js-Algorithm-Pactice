function every(collection, pre) {
  pre=collection.every(function(item){
  	return item[pre];
  });
  return pre;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

