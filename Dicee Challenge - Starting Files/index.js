var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomdice = "dice"+randomNumber1+".png";
var source = "./images/"+randomdice;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",source);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomdice1="dice"+randomNumber2+".png";
var source1="images/"+randomdice1
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",source1);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Oops That's a tie";
}