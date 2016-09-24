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