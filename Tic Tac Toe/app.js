// Immediately-invoked function expression
(function () {
  var turn = "X";
  var table = document.getElementById('game-table');
  var board = ['E','E','E','E','E','E','E','E','E','E'];
  var result = "still running";

  //console.log(table);
  table.addEventListener('click', function(event) {
    //console.log(event);
    if (event.target.tagName != "TD") {
      return;
    };
    if (!event.target._clicked) {
      event.target.innerText = turn;
      setMessage(turn + "'s turn", "message");

      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      event.target._clicked = true;
    }


    board[event.target.id] = getBox(event.target.id);
    isGameDone();
    setMessage(result, "result");
  }, false);

  function setMessage(msg,idString) {
    document.getElementById(idString).innerText = msg;

  }

  function getBox(number) {
   return document.getElementById(number).innerText;
  }

  function isGameDone(){
    for(var i = 0; i <= 6; i = i + 3) {
            if(board[i] !== "E" && board[i] === board[i + 1] && board[i + 1] == board[i + 2]) {
                result = board[i] + " Won"; //update the state result
                return true;
            }
        }

        //check columns
        for(var i = 0; i <= 2 ; i++) {
            if(board[i] !== "E" && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
                result = board[i] + " Won"; //update the state result
                return true;
            }
        }

        //check diagonals
        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(board[i] !== "E" && board[i] == board[i + j] && board[i + j] === board[i + 2*j]) {
                result = board[i] + " Won"; //update the state result
                return true;
            }
        }
        var available = emptyCells();
        if(available.length == 0) {
            //the game is draw
            result = "draw"; //update the state result
            return true;
        }
        else {
            return false;
        }
  }

  function emptyCells() {
    var indxs = [];
       for(var itr = 0; itr < 9 ; itr++) {
           if(board[itr] === "E") {
               indxs.push(itr);
           }
       }
       return indxs;
  }

})();
