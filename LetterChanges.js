//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.Replace every letter in the string with the letter 
// following it in the alphabet(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string(a,e,i,o,u) and finally return this modified string. 

function letterChanges(str){
	var arr = str.toLowerCase().split("");
	var rst = [];
	var vowels = ["e","i","o","u"];

	each(arr,function(element){
		var code  = element.charCodeAt(); 
		if(code >=97 && code <= 121){
			element = String.fromCharCode(code + 1); 
			rst.push(element);
		}else{
			rst.push("A");
		}
	});

	for(var i = 0; i< rst.length; i++){
		if(vowels.includes(rst[i])){
			rst[i] = rst[i].toUpperCase();
		}
	}

	return rst.join(""); 

}