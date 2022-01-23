const result_h1 = document.querySelector(".result > h1")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice(){
  const choices = ['rock','paper','scissor'];
  const randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];
}

function win(playerChoice,computerChoice){
  console.log("PLAYER MENANG!")
  result_h1.innerHTML = `Player MENANG! ${playerChoice} mengalahkan ${computerChoice}. `
}

function lose(playerChoice,computerChoice){
  result_h1.innerHTML = `player KALAH! ${playerChoice} tidak dapat melawan ${computerChoice}`
}

function draw(playerChoice,computerChoice){
  result_h1.innerHTML = `pertandiingan SERI!!! ${playerChoice} seimbang dengan ${computerChoice}.`
}

function gameplay (playerChoice){
  const computerChoice = getComputerChoice();
  switch(playerChoice+computerChoice){
    case"rockscissor":
    case"paperrock":
    case"scissorpaper":
    win(playerChoice,computerChoice);
    break;
    case"rockpaper":
    case"paperscissor":
    case"scissorrock":
    lose(playerChoice,computerChoice);
    break;
    case"rockrock":
    case"paperpaper":
    case"scissorscissor":
    draw(playerChoice,computerChoice);
  }
}

function main(){
  rock_div.addEventListener('click', function(){
    gameplay("rock");
  })
  paper_div.addEventListener('click', function(){
    gameplay("paper");
  })
  scissors_div.addEventListener('click', function(){
    gameplay("scissor");
  })
}

main();