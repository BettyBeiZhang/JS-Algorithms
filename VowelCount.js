/* Have the function VowelCount(str) take the str string being passed and return the number of vowels the string contains(ie. "Hello All" would return 3). Do not
count y as a vowel for this challenges. Assum str is not empty. 
Below are three ways to do this challenges. */

function vowelCount(str){
	var arr = str.split("");
	var vowels = "aeiouAEIOU";
	var count = 0;

	arr.forEach(function(element){
		if(vowels.includes(element)){
			count ++;
		}

	});

	return count;
}


function vowelCount2(str){
	var arr = str.split("");
	var vowels = "aeiouAEIOU";

	return arr.filter(function(element){
		if(vowels.includes(element)){
			return element; 
		}
	}).length; 
}


function vowelCount3(str){
	var arr = str.split("");
	var vowels = "aeiouAEIOU";

	return arr.reduce(function(count, element){
		if(vowels.includes(element)){
			count++;
		}
        return count;

	},0);  
}
