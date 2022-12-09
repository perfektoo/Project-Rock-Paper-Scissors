let computerScore = 0;
let playerScore = 0;
let playerChoice = "";

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "камень";
  } else if (number === 1) {
    return "бумага";
  } else if (number === 2) {
    return "ножницы";
  }
}

function playRound() {
  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    alert(`Ничья! У вас ${playerChoice} и у компьютера ${computerChoice}`);
  } else if (playerChoice === "камень" && computerChoice === "бумага") {
    computerScore += 1;
    playerScore += 0;
    alert(
      `Компьютер выиграл очко! У компьютера ${computerChoice}, а у вас ${playerChoice}`
    );
    if (computerScore === 5 || playerScore === 5) {
      alertScore();
    }
  } else if (playerChoice === "камень" && computerChoice === "ножницы") {
    computerScore += 0;
    playerScore += 1;
    alert(
      `Вы выиграли очко! У вас ${playerChoice}, а у компьютера ${computerChoice}`
    );
    if (computerScore === 5 || playerScore === 5) {
      alertScore();
    }
  } else if (playerChoice === "ножницы" && computerChoice === "бумага") {
    computerScore += 0;
    playerScore += 1;
    alert(
      `Вы выиграли очко! У вас ${playerChoice}, а у компьютера ${computerChoice}`
    );
    if (computerScore === 5 || playerScore === 5) {
      alertScore();
    }
  } else if (playerChoice === "ножницы" && computerChoice === "камень") {
    computerScore += 1;
    playerScore += 0;
    alert(
      `Компьютер выиграл очко! У компьютера ${computerChoice}, а у вас ${playerChoice}`
    );
    if (computerScore === 5 || playerScore === 5) {
      alertScore();
    }
  } else if (playerChoice === "бумага" && computerChoice === "камень") {
    computerScore += 0;
    playerScore += 1;
    alert(
      `Вы выиграли очко! У вас ${playerChoice}, а у компьютера ${computerChoice}`
    );
    if (computerScore === 5 || playerScore === 5) {
      alertScore();
    }
  } else if (playerChoice === "бумага" && computerChoice === "ножницы") {
    computerScore += 1;
    playerScore += 0;
    alert(
      `Компьютер выиграл очко! У компьютера ${computerChoice}, а у вас ${playerChoice}`
    );
    if (computerScore === 5 || playerScore === 5) {
      alertScore();
    }
  }
}

if (computerScore === 5 || playerScore === 5) {
  alertScore();
}

function alertScore() {
  if (computerScore > playerScore) {
    alert(`Компьютер выиграл! Счет ${computerScore} против ${playerScore} `);
  } else {
    alert(`Вы выиграли! Счет ${playerScore} против ${computerScore} `);
  }
}

const rockElem = document.querySelector("#rockBut");
rockElem.addEventListener("click", () => {
  playerChoice = "камень";
  playRound();
});

const paperElem = document.querySelector("#paperBut");
paperElem.addEventListener("click", () => {
  playerChoice = "бумага";
  playRound();
});

const scissorsElem = document.querySelector("#scissorsBut");
scissorsElem.addEventListener("click", () => {
  playerChoice = "ножницы";
  playRound();
});
