var headone = document.querySelector("#one")
var headtwo = document.querySelector("#two")
var headthree = document.querySelector("#three")

//console.log("connected")

headone.addEventListener("mouseover" , function()
{
headone.textContent = "mouse currently over";
headone.style.color = "red";

})

headone.addEventListener("mouseout" , function()
{
headone.textContent = "HOVER OVER ME";
headone.style.color = "black";

})

headtwo.addEventListener("click" , function()
{
headtwo.textContent = "CLICKED ON";
headtwo.style.color = "green";

})

headthree.addEventListener("mouseover" , function()
{
headthree.textContent = "I WAS DOUBLE CLICKED";
headthree.style.color = "gray";

})