/*$("h1").click(function(){
console.log("there was a click!")})*/

/*$("li").click(function(){
console.log("any li was clicked!")})*/

/*$("h1").click(function(){
$(this).text("i was changed")})*/

//key press
/*$("input").eq(0).keypress(function(event){
if(event.which === 13)
$("h3").toggleClass("turnBlue")})*/

$("h1").on("dblclick" , function(){
$(this).toggleClass("turnBlue")})

$("h1").on("mouseenter" , function(){
$(this).toggleClass("turnBlue")})

/*$("input").eq(1).on("click" , function(){
$(".container").fadeOut(3000)})*/

$("input").eq(1).on("click" , function(){
$(".container").slideUp(3000)})




