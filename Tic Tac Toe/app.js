function startGame() {
  document.turn = "X";
  //setMessage(document.turn + " gets to start");
}

function setMessage(msg) {
  var str = msg + " gets to start";
  document.getElementById("message").innerText = str;
}


var table = document.getElementById('game-table');

//console.log(table);
table.addEventListener('click', function(event) {
  //console.log(event);
  if (event.target.tagName != "TD") {
    return;
  };
  if (!event.target._clicked) {
    event.target.innerText = document.turn;
    setMessage(document.turn);
    if (document.turn == "X") {
      document.turn = "O";
    } else {
      document.turn = "X";
    }
    event.target._clicked = true;
  }
}, false);
