// greatest/largest product of three element in array is either (min1 * min2 * max1) or (max1 * max2 * max3).
// for example: array =[-10, 7,29, 30,5,-10,-70].
function largestProductOfThree(array) {
  	array = array.sort(function(a,b) { return a - b; });
  	var a = array[0] * array[1] *array[array.length -1];
  	var b = array[array.length -1] * array[array.length -2] * array[array.length -3];
    return 	Math.max(a,b)
}
