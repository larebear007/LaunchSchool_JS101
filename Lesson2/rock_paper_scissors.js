const prompt = (message) => console.log(`> ${message}`);
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const RLSYNC = require('readline-sync');
const VALID_CHOICES = ['rock', 'r', 'paper', 'p', 'scissors', 'scissor', 'sc', 'lizard', 'l', 'spock', 'sp'];
const WINNING_COMBOS = {
  rock : ['scissors', 'scissor', 'sc', 'lizard', 'l'] ,
  r : ['scissors', 'scissor', 'sc', 'lizard', 'l'] ,
  paper : ['rock', 'r', 'spock', 'sp'] ,
  p : ['rock', 'r', 'spock', 'sp'] ,
  scissors : ['paper', 'p', 'lizard', 'l'] ,
  sc : ['paper', 'p', 'lizard', 'l'] ,
  lizard : ['spock', 'sp', 'paper', 'p'] ,
  l : ['spock', 'sp', 'paper', 'p'] ,
  spock : ['scissors', 'scissor', 'sc', 'rock', 'r'] ,
  sp : ['scissors', 'scissor', 'sc', 'rock', 'r']
}

async function displayWelcome() {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  await sleep(500);
  prompt('Best 3 out of 5 wins the game.');
  await sleep(500);
  prompt('Let\'s begin!\n\n');
  await sleep(500);

  prompt('While playing, choose one of the following actions:');
  await sleep(500);
  prompt('rock     or   r');
  await sleep(500);
  prompt('paper    or   p');
  await sleep(500);
  prompt('scissors or   sc');
  await sleep(500);
  prompt('lizard   or   l');
  await sleep(500);
  prompt('spock    or   sp:  ');
}  

function getUserChoice() {
  let userChoice = RLSYNC.question(prompt('Your choice: ')).toLowerCase();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('Invalid choice.');
    userChoice = RLSYNC.question(prompt('Choose one aciton: rock, paper, scissor'))
                .toLowerCase();
  }
  return userChoice;
}

function getComputerChoice() {  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function displayRounds() {
  let gameRound = 1;
  let userWins = 0;
  let computerWins = 0;
  let score = `--ROUND ${gameRound} SCORE-- You: ${userWins}, Computer:${computerWins}`;
  while (gameRound <= 5) {
    if (userWins === 3 || computerWins === 3) {
      break;
    } else if (WINNING_COMBOS[getUserChoice()].includes(getComputerChoice())) {
      userWins += 1;
      prompt('Woohoo! You won!\n' + score);
    } else if (getComputerChoice() === getComputerChoice()) {
      prompt('Tie!\n' + score);
    } else {
      computerWins += 1;
      prompt('Ah rats! Computer won.\n' + score);
    }

    gameRound += 1;
  }
}

function displayWinner() {
  if (userWins > computerWins) {
    prompt('FINAL RESULT:\n\
    CONGRATULATIONS! You beat the computer at Rock, Paper, Scissors, Lizard, Spock!');
  } else if (computerWins > userWins) {
    prompt('FINAL RESULT:\n\
    Better luck next time. Computer beat you at Rock, Paper, Scissors, Lizard, Spock!');
  } else {
    console.log('*** ERROR *** within userWins computerWins totals');
  }
}

function playGame() {    
    while (true) {
      displayRounds();
      displayWinner();

      let playAgain = RLSYNC.question(prompt('Would you like to play again?\n\
      Please respond with "yes" or "no":  ')).toLowerCase();
      if (playAgain === 'yes' || playAgain) {
        continue;
      } else if (playAgain === 'no' || playAgain === 'n') {
        prompt('Thanks for playing Rock, Paper, Scissors, Lizard, Spock! Goodbye!');
        break;
      } else {
        prompt('Invalid input: Restart the program to play again.');
        break;
      }
    }
}

async function game() {
  await displayWelcome();
  playGame();
}

game();