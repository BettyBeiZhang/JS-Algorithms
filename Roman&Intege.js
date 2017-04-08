/*Given a roman numeral, convert it to an integer. And Integer to Roman numeral. 
// Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values", according to the spec.
 This has some interesting consequences. There's no such thing as an integer in JavaScript */

var intToRoman = function(num) {
    var str = "";
    var weights = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var numerals= ["M",  "CM","D", "CD", "C","XC","L","XL", "X", "IX", "V", "IV", "I"];

    for(var i=0; i<weights.length && num !== 0; i++){
    	var check = num /weights[i];
    	for(var j=1; j>= check; j--){
    		str += numerals[i];
    	}

    	num = num % weights[i];
    }
      return str; 

};

  


// leetcoode #13
var RomanToInt = function(str) {
	var baseTranslator = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };


    var prev =0;
    var rst = 0; 

    for(var i=str.length -1; i>=0; i--) {
    	var num = baseTranslator[str[i]];

    	if(num> prev){
    		rst += num;
    	}else{
    		rst -= prev;
    	}
    	prev = num;   // NOTE THIS 
    }
     return rst; 

};




