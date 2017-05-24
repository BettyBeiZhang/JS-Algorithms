// Rreturn  all the permutations of Array

function permutator(inputArr) {
  var results = [];

  function permute(arr, temp) {
    var cur; 
    var temp = temp || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(temp.concat(cur));
      }
      permute(arr.slice(), temp.concat(cur));
      arr.splice(i, 0, cur[0]); // add cur[0] to the arr at index[0]
    }

    return results;
  }

  return permute(inputArr);
}