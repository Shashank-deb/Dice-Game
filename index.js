//THIS IS FOR GENRATING THE RANDOM NUMBER OF FIRST DICE
var randomNumber1=Math.floor(Math.random()*6)+1;//gives number between 1-6
var randomImageSource1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);



//THIS IS FOR GENRATING THE RANDOM NUMBER OF SECOND DICE
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



//THIS IS CHECK CONDITION TO GAME 
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player2 Wins!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Draw !";
}
else{
    document.querySelector("h1").innerHTML="🚩Ping is High";

}