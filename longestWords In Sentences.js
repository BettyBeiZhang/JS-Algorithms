/* Find sentences containing the largest number of words in some given string text. The text is specified as a string S consisting of
letters,space, dot(.), question mark(?) and exclamation mark(!) */

function longestWord(s) {
  var arr = s.split(/[\\.!\?]/);
  var count = filter(arr[0].split(' ')).length;

  for(var i=0; i< arr.length;i++) {
    var subarr = arr[i].split(' ');
    var max = filter(subarr).length;

    if(Number(max) >= Number(count)){
      count = max;
    }
  }
  return count;
}

//helper function that remove empty sapce in an array.
function filter(arr) {
   return arr.filter(e => String(e).trim());
}
