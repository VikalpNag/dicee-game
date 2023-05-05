var randomNumber1=(Math.floor(Math.random()*6)+1);
var randomDiceImages="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImages ;

var changeImage1=document.querySelectorAll("img")[0];
changeImage1.setAttribute("src",randomImageSource);

//for 2nd dice
var randomNumber2=(Math.floor(Math.random()*6)+1);
var randomDiceImages2="dice" + randomNumber2 + ".png";
var randomImageSource2="images/" + randomDiceImages2 ;

var changeImage2=document.querySelectorAll("img")[1];
changeImage2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML=" Draw ";  
}