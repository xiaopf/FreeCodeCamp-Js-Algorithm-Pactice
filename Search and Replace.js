function myReplace(str, before, after) {
  var be=before.charAt(0);
  var af=after.charAt(0);

  if(/[A-Z]/.test(be)){ 
    after=after.replace(after.charAt(0),af.toUpperCase());
  }else{
    after=after.replace(after.charAt(0),af.toLowerCase());
  }
  var arr=str.split(' ');
  var pos=arr.indexOf(before);
  arr.splice(pos,1,after);
  str=arr.join(' ');


  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
