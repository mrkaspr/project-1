//combinatin of winning array sequence on the board
var winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]
//Helper function
//function to turn boxes in html into an array.
var grid = function(){
  return Array.from(document.getElementsByClassName('q'))
} 
//Helper function
//function to change the element ID of ie q0 -> 0 by replacing q with an empty string. 
//The purpose is to use the number / return value as the index number / location ID of the element 
var qNumID = function(elem){
  return Number.parseInt(elem.id.replace('q', ''));
}

//Helper function
//Return an array of empty boxes
var emptyBox = function(){
  return grid().filter(function(elem){
    return elem.innerText === ''
  })
}

//Helper function
//function to check whether we have three array element with the same value and not empty
var allSame = function(arr){
  return arr.every(function(elem){
    return elem.innerText === arr[0].innerText && elem.innerText !== ''
  })
}

var takeTurn = function(index, letter){
  grid()[index].innerText = letter
}

var opponentChoice = function(){
  return qNumID(emptyBox()[Math.floor(Math.random() * emptyBox().length)])
}

var endGame = (winningSequence) => {
  winningSequence.forEach(elem => elem.classList.add('winner'))
  console.log('Winning')
  disableListener()
}

//this function check for winning logic
var checkForVictory = function(){
  var victory = false

  winningCombos.forEach(function(combo){
    
    var lgrid = grid()
    var sequence = [lgrid[combo[0]], lgrid[combo[1]], lgrid[combo[2]]]

    if(allSame(sequence)){
      victory = true
      endGame(sequence)
    }
    
  })
  return victory;
}

var opponentTurn = function(){
  disableListener();
  setTimeout(function(){
    takeTurn(opponentChoice(), 'o')
    if(!checkForVictory())
      enableListener();
  }, 1000)
}

var clickFn = function(event){
  takeTurn(qNumID(event.target), 'x');
  if(!checkForVictory())
    opponentTurn();
  
}

//start event listener for click 
var enableListener = function(){
  grid().forEach(function(elem){
    elem.addEventListener('click', clickFn)
  })
}

//remove event listener
var disableListener = function(){
  grid().forEach(function(elem){
    elem.removeEventListener('click', clickFn)
  })
}

enableListener()

/*

Things to do:
1. Do documentation
2. Improve user interface
3. Do more game build practice
4. Update learning journal

Things need to improve
1. With this logic, AI entry can be overriden with human player. 
   Need to built control to handel this scenario
2. Need a reset button return to start where board is value is empty*/
