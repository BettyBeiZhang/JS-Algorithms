//Have the function LetterCapitalize(sen) take the  sen parameter being passed and capitalize the first letter of each 
// word. World will be separated by only one space. Assume sen is not empty. 


function Capitalize(str){
	var arr = str.split("");

	for(var  i= 0;i< arr.length; i++){
		if(i === 0 ){
			arr[i] = arr[i].toUpperCase();
		} 
	}
	return arr.join(""); 

}

function letterCapitalize(sen){
	var arr = sen.split(" ");

	for(var i = 0; i< arr.length; i++){
		arr[i] = Capitalize(arr[i]); 
	}

	return arr.join(" ");

}
