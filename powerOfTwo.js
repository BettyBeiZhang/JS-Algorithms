function isPowerOfTwo(num) {
  return num && (num -1) ===0;
};


function isPowerOfTwoZeroCase(num){
  return (num !==0) && (num & (num -1) === 0);
};


function isPowerOfThree(n) {
   while(n>2){
        if(n%3 !== 0) return false;
        n = parseInt(n/3);
    }

    return n==1;
};
