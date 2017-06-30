function Node(val) {
  this.val = val;
  this.next;
}

Node.prototype.append = function(val) {
  var newNode = new Node(val);
  var current = this;

  while(current != undefined){
    if(current.next === undefined) {
      current.next = newNode;
      break;
    }

    current = current.next;
  }

  return newNode;
}


function removeMid(mid){
  while(true) {
    if(mid.next.next === undefined) {
      mid.val= mid.next.val;
      mid.next = undefined;
      break;
    }else {
      mid.val = mid.next.val;
      mid = mid.next;
    }
  }
}
