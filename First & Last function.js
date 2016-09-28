function first(array, num){
	var result = [];
	
	var i = 0; 
	while (i < num){
		result.push(array[i]);
		i++; 
	}

	if(num > array.length){
		return array;
	}else if(num === undefined){
		return array[0];
	}

	return result;

}


function first(arr,num){
	if(num === undefined){
		return arr[0];

	}

	return arr.slice(0,num);
}

function last(arr,num){
	if(num === undefined){
		return arr[arr.length-1];
	}

	return arr.reverse().slice(0,num).reverse();
}