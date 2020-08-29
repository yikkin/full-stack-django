
//restart
var restart = document.querySelector("#b")
//clear all the squares
var squares = document.querySelectorAll("td")
//check the square marker
function clearboard(){
for(var k = 0;k < squares.length ; k++){
squares[k].textContent = "";
}}
//for loop to add event listeners to all the squares

restart.addEventListener("click" , clearboard);

var cellone = document.querySelector("#one")

cellone.addEventListener("click" , function(){
if(cellone.textContent === ""){
cellone.textContent = "X";
}else if(cellone.textContent ==="X"){
cellone.textContent = "O";}else
{cellone.textContent = "";
}
})

function changemarker(){
if(this.textContent === ""){
this.textContent = "X";
}else if(this.textContent ==="X"){
this.textContent = "O";}else
{this.textContent = "";
}
}

for(var k = 0 ; k < squares.length ; k++){
squares[k].addEventListener("click" , changemarker)
}