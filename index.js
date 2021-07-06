var ranl=Math.round(Math.random()*5)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+ranl+ ".png");
var ranr=Math.round(Math.random()*5)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+ranr+ ".png");
if(ranl>ranr){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (ranl<ranr) {
  document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
  document.querySelector("h1").innerHTML="Draw";
}
