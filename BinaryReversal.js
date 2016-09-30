//Have the function BinaryReversal(str)take the str parameter being passed, which will be a postive integer, take its binary 
//representation, reverse that string of bits,and then finally return the new reversed string in decimal form. For example,
//if str is "47" then binary version of this string is 00101111. Your program should reverse this binary string which then 
//becomes:11110100 and then finally return the decimal version of this string, which is 244.

function BinaryReversal(str) { 
    var num = Number(str);
    var newBinary = [];
    while(num >0){
        newBinary.push(num % 2);
        num =Math.floor(num/2);   
    }

    while(newBinary.length % 8!== 0){
        newBinary.push(0); // convert to reversed binary numbers array.
    }  
    
    var rst= 0;
    var orgBinary = newBinary.join("").split("").reverse();
    
    for(var i= 0; i< newBinary.length; i++){
        if(parseInt(orgBinary[i]) !==0){
            rst += Math.pow(2,i); // convert to decimal form.
        }
    }
   
  return rst; 
         
}


//Below is the program of the function BinaryConverter(str) return the decimal form of the binary value. 
//For example: if 101 is passed return 5, or if 1000 is passed return 8. 

function BinaryConverter(str){
  return parseInt(str, 2)
}
BinaryConverter(100); // binary number to decimal form number 4. 








