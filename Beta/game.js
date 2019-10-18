//winning combination. The numbers are index numbers of an array
var winningArray = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,8]
]


var box = document.querySelector('.box')
var positions = document.querySelectorAll('.box')//array

//function that when called is use to insert a number on .box upon clicking event
var handleClick  = function (num){
  
  event.target.textContent = "x" //change textContent of element click to x
  console.log(event.target.id)// print element id
  

   //console.log(typeof(Number(event.target.innerText)))
   //console.log(boxes)
}

//function
var clickCounter = function (num){
  num.addEventListener('click', handleClick)
  //num.removeEventListener('click', handleClick)
  //console.log(num)
}

//boxes[i].addEventListener('click', handleClick)
positions.forEach(clickCounter)//for each element in boxes array call clickCounter

//function that figure out when to take turn
var takeTurn = function (elem){

}