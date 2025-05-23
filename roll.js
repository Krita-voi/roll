const myRoll = document.getElementById("myRoll");
const myLabel = document.getElementById("myLabel");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const min = 1;
const max = 6; 
let randomNum;
let randomNum1;
let randomNum2;


myRoll.onclick = function(){
    randomNum = Math.floor(Math.random() * max ) + min;
    randomNum1 = Math.floor(Math.random() * max ) + min;
    randomNum2 = Math.floor(Math.random() * max ) + min;
    myLabel.textContent = randomNum;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
}