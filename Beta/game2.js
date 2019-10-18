const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

//what is this function for?
function TicTacToeGame(){
  const board = new Board();
  const humanPlayer = new HumanPlayer();
  const computerPlayer = new ComputerPlayer();
  let turn = 0;

  this.start = function(){
    const config = { childlist: true};
    const observer = new MutationObserver(() => takeTurn())
    board.position.forEach((el) => observer.observe(el, config))
  }

  function takeTurn(){

  }

}

function Board(){
  this.position = Array.from(document.querySelectorAll('.box'))// an array of div class element
  console.log(this.position)
}

function HumanPlayer(){

}

function ComputerPlayer(){

}