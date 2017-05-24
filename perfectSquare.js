// Given two integer A and B, return the number of whole perfect squares within the interval[A...B];
function solution(A, B) {
   var arr = [];
   var count  = 0;
   for (var i = A; i <= B; i++) {
      arr.push(i);
   }

  for(var i= 0; i< arr.length; i++){
    if(isPerfectSquare(arr[i])){
      count++;
    }
  }
  return count;
}


//helper function of checking a value is perfect square, if yes return true.
function isPerfectSquare(value) {
  var result = false;

  var sqrt = Math.floor(Math.sqrt(value));

  result = value == sqrt  * sqrt;

  return result;
}
