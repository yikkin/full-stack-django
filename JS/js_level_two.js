/*function hello(name = "dodi"){
return "hello "+name}

hello()

function addnumbers(numb1 , numb2){
console.log(numb2 + numb1)}

addnumbers(5,4)

function formal(name ="sam" , title = "sir"){
return title + " "+name}

var v = "global v"
var staff = "global staff"

function func(staff){
console.log(v)
staff = "reassign staff inside func"
console.log(staff)}

func()

console.log(staff)*/

function sleepIn(weekday , vacation){
return !(weekday ||vacation)
}

sleepIn(false , false)
sleepIn(true , false)
sleepIn(false , true)

function monkeytrouble(asmile , bsmile){
return (asmile && bsmile) || (!asmile && bsmile)
}

monkeytrouble(true , true)
monkeytrouble(false , true)
monkeytrouble(false , false)

function stringtimes(string , n){
var returnstr = "";
var i = 0
while(i<n){
returnstr += string
i++}
returnstr}

stringtimes("hi" , 1)

function luckysum(a , b, c){
if(a === 13){
return 0}
if(b === 13){
return a}
if(c === 13){
return a+b}
return a+b+c
}

luckysum(1,2,3)
luckysum(1,13,2)
luckysum(1,2,13)

function caught_speeding(speed , is_birthday){
if(is_birthday == true && speed <= 65 || speed <= 86){
return 0}else if(speed >= 81){
return 2}else if(speed > 60 && speed <81){
return 1}else {return 0}
}

function caught_speeding(speed ,is_birthday){
if(is_birthday){
speed -= 5}
if(speed <= 60){
return 0}
if(60 <speed <= 80){
return 1}
return 2}


caught_speeding(60 ,false)
caught_speeding(65 , false)

function makebricks(small , big  , goal){
return goal%5 >= 0 && goal%5 - small <= 0 && small +5*big >= goal}

makebricks(3,1,8)
makebricks(3,1,9)
makebricks(3,2,10)
