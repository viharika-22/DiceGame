var randomNum1= (Math.floor(6*(Math.random())))+1
var randomImgNo1= "dice" + randomNum1 + ".png"
var randomImg1 = "images/" + randomImgNo1

var randomNum2= (Math.floor(6*(Math.random())))+1
var randomImgNo2= "dice" + randomNum2 + ".png"
var randomImg2 = "images/" + randomImgNo2

var imgage1 = document.querySelectorAll("img")[0]
var imgage2 = document.querySelectorAll("img")[1]

imgage1.setAttribute("src", randomImg1);
imgage2.setAttribute("src", randomImg2);

if (randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 is the winner !!"
}else if (randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player 2 is the winner !!"
}else if (randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML="It's a draw :("
}