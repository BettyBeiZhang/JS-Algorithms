//Have the function NumberSeach(str) take the str parameter, search for all the numbers in the string, 
//add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" 
//the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the 
//final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole 
//string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.



function NumberSearch(str) {
    var arr = str.toLowerCase().split("");
    var map = [];
    var LettersArray = []; 
    
    
    for(var i = 0; i< arr.length; i++){
        if(isNumeric(arr[i]) === true){
            map.push(arr[i]);
        }else if(arr[i].charCodeAt() >= 97 || arr[i].charCodeAt() <= 122 ){
            LettersArray.push(arr[i]);
        }
    }
    
    var output = map.reduce(function(output, ele){
        return output + Number(ele); 
    },0);
    
       return Math.round(output/LettersArray.length);
}
   
   
function isNumeric(n) {
  if(!isNaN(n)) {
  	return true;
  }
  else {
    return false;
  }
}
