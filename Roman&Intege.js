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

 //helper function for consecutive letters input
    function letterCount(str) {
      var s = str.match(/([a-zA-Z])\1*/g) || [];
      return s.map(function(item) {
        return {
          letter: item[0],
          length: item.length
        };
      });
    }
    // build the main convert function
    function romanToInt(romanNumeral) {
      //debugger;
      var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
      if (romanNumeral === '') {
        return 0;
      }
      var consecutiveLengths = letterCount(romanNumeral);
      for (var i = 0; i < consecutiveLengths.length; i++) {
        if (consecutiveLengths[i].length > 1 && "VLD".includes(consecutiveLengths[i].letter)) {
          alert("Not a valid roman numerals");
          return;
        }
        if (consecutiveLengths[i].length > 3 && "IXC".includes(consecutiveLengths[i].letter)) {
          alert("Not a valid roman numerals");
          return;
        }
        if (consecutiveLengths[i].length > 4 && "M".includes(consecutiveLengths[i].letter)) {
          alert("Not a valid roman numerals");
          return;
        }
      }
      var sum = 0;
      for (var i = 0; i < romanNumeral.length; i++) {
        var v1 = map[romanNumeral[i]];
        var v2 = map[romanNumeral[i + 1]];
        // if next roman numeral value greater than the previous one, then result equal v2 -v1
        if (v2 > v1) {
          sum = sum + v2 - v1;
          i++;
        } else {
          // normal case, if v2 <= v1. result equal v2 + v1
          sum = sum + v1;
        }
      }
      return sum;
    };


