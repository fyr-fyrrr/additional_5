module.exports = function check(str, bracketsConfig) {
  // your solution
  let a = 0;
  let b = 0;
	 for (i = 0; i <str.length; i++) {
		  if  (str.charAt(i) == '(') {
			  a++
		  }
		  else {
			  a-- 
		  };
		  if (a < 0) {
			  return (false);
			  b++
		  };
	  }
	 if (b == 0) {
		  return (true);
	 };
}
