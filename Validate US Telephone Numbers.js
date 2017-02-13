function telephoneCheck(str) {
  var partern1=/^((1)\s*)?[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  var partern2=/^((1)\s*)?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}$/;
  var partern3=/^((1)\s*)?[0-9]{3}\s*[0-9]{3}\s*[0-9]{4}$/;
  var partern4=/^((1)\s*)?[0-9]{3}\s*[0-9]{3}\s*[0-9]{4}$/;
  var arr=[partern1,partern2,partern3,partern4];
  return arr.some(function(pat){return pat.test(str);});
}

telephoneCheck("1 555-555-5555");
