//  Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored 
//in arr and return the string true if any combination of numbers in the array can be added up to equal 
//the largest number in the array, otherwise return the string false. For example: if arr contains 
//[4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be
// empty, will not contain all the same elements, and may contain negative numbers. 



function ArrayAddition(array){
  var maxNum = array.sort().splice(array.length -1);
  var max = Number(maxNum);
  for(var i = 0; i< Subsets(array).length; i++){
	 var subarray = Subsets(array)[i];
	 var result = subarray.reduce(function(result, ele){
		  return result + ele;
        },0);

		if(result === max){
	      return true;
	    }   
  }
	return false;
}

function Subsets(arr) {
  	var powers = [];
 	var total = Math.pow(2,arr.length);
 
 	for(var i =0; i< total; i++){
  		var tmp =[];
  		var num = Number(i).toString(2);
  
  		while (num.length < arr.length){
  			num = "0" + num;
  		}
  		for(b = 0; b< num.length; b++){
  			if(num[b] === "1"){
  				tmp.push(arr[b]);
  			}
  		}
  		powers.push(tmp);
  	}
  	    return powers;
}
