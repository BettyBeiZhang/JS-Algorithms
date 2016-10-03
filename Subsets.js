//Have the function Sunsets(array) take the array being passed and return the suesets of this array. The Subsets function shoule contains every possible 
// combinations of numbers. It also includes the empty set which contains no numbers from the origin set.


function Subsets(arr){
	var powers = [];
	var total = Math.pow(2,arr.length);

	for(var i =0; i< total; i++){
		var tmp =[];
		var num = Number(i).toString(2);
		console.log(num);

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


