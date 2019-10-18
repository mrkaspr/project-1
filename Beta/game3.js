console.log("Hello!")

/*----- constants -----*/
/*----- app's state (variables) -----*/
let board
let turn = 'X'
let win
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.querySelector('h2')
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn)
/*----- functions -----*/

function handleTurn(event) {
  let idx = squares.findIndex(function(square) {
    return square === event.target;
  })

  board[idx] = turn;

  if (turn === 'X'){
    turn = 'O'
  }
  else{
    turn = 'X'
  }

  //console.log(square)
  console.log(event.target)
  console.log(board)
  render();

}


function init(){
  board = [
    '','','',
    '','','',
    '','','',
  ]
}

function render(){
  board.forEach( function(mark, index){
    

    //this sets of text content of the squares of the same position to the mark on the html
    squares[index].textContent = mark
    console.log(mark, index)
  })

  messages.textContent = `it's ${turn}'s turn!`
}

init()
render()