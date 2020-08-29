var first_name = prompt("what is your first name?");
var last_name = prompt("what is your last name?");
var age = prompt("what is your age?");
var height = prompt("how tall are your? (cm units)");
var pet_name = prompt("what is your pet name?");

var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;

if(first_name[0] === last_name[0]){
namecond = true
}else {
namecond = false}
if(age > 20 && age < 30){
agecond = true
}else {
agecond = false}

if(height >= 175){
heightcond = true
}else {
heightcond = false}

if(pet_name[pet_name.length -1] ==="y"){
petcond = true}
else{
petcond = false
}

if(namecond && agecond && heightcond && petcond){
console.log("welcome spy!")}else{
console.log("you ain't no spy!")
}









