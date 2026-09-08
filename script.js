  let form = document.getElementById("gameform");

    form.addEventListener("submit", function(event) {
      event.preventDefault ();

      let choice = document.getElementById("playerChoice").value;

    console.log(choice);
    });


function getComputerChoice () {
  let choices = ["rock","paper","scissors"];

  let randomIndex = Math.floor(Math.random() * choices.length) ;

  return choices [randomIndex] ;
}


function determineWinner(player, computer) {
  if (player === computer) {
      return "It's a tie!";
  }

if (
  (player === "rock" && computer === "scissors") ||
  (player === "paper" && computer === "rock") ||
  (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
}
    return "Computer Wins!";
}


if (
  (player === "paper" && computer === "scissors") ||
  (player === "scissors" && computer === "rock") ||
  (player === "rock" && computer === "paper")
  ) {
    return "You Lose!";
}
    return "Computer Loses!";
}






let form = document.getElementById("gameform");

form.addEventListener("submit", function(event) {
  event.preventDefault ();

  let playerChoice = document.getElementById("playerChoice").value.toLowerCase ();

  let computerChoice = getComputerChoice ();

  let result = determineWinner (playerChoice,computerChoice);

  document.getElementById("result").textContent =
    "Computer chose" + computerChoice + "." + result;
});


let playerScore = 0;

let computerScore = 0;

addEventListener ("You Win!") function (event) {
  playerScore = playerScore +1;
  container.textContent = playerScore;
});












  
