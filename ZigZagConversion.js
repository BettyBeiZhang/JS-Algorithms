//ZigZagConversion question

var convert = function(s, numRows) {
    if(s === null) return "";
    if(numRows == 1)  return s;
    var n = numRows*2 - 2;
    var array = [];

    for(var k = 0 ; k < numRows; k++){
        array.push("");
        console.log(array)
    }

    for(var i in s){
        var lineNumber = i%n;
        if(lineNumber < numRows){
            array[lineNumber] += s[i];
            console.log(array)
        } else {
            array[2*numRows - lineNumber -2] += s[i];
        }
    }
    return array.join("");
};
