var randomNumber1=Math.floor(Math.random()*6)+1;
var diceImage1="dice"+ randomNumber1 + ".png";
var imageSource="images/"+diceImage1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage2="dice"+ randomNumber2 + ".png";
var imageSource="images/"+diceImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imageSource);
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML ="Player1 Wins!!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML ="Player2 Wins!!";  }
else{
    document.querySelector("h1").innerHTML ="Draw!!";
}     
