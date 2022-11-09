let computerScore = 0;
let playerScore = 0;

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

function getPlayerChoice() {
  answer = prompt("В строке ввода напечатайте: камень");
  return answer.toLowerCase();
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    computerScore = computerScore + 0;
    playerScore = playerScore + 0;
    alert('Ничья! И у вас, и у компьютера "камень"!');
  } else if (computerChoice === "бумага") {
    computerScore += 1;
    alert("Вы проиграли! Бумага побеждает камень!");
  } else if (computerChoice === "ножницы") {
    playerScore += 1;
    alert("Вы выиграли! Камень побеждает ножницы!");
  }
}

for (let i = 0; i < 5; i++) {
  playRound();
  alert(`У компьютера ${computerScore} очков, а у вас ${playerScore} очков`);
}

if (computerScore > playerScore) {
  alert(`Компьютер выиграл! Счет ${computerScore} против ${playerScore} `);
} else {
  alert(`Вы выиграли! Счет ${playerScore} против ${computerScore} `);
}
