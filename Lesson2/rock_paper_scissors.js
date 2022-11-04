const prompt = (message) => console.log(`> ${message}`);
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const RLSYNC = require('readline-sync');
const VALID_USER_CHOICES = ['rock', 'r', 'paper', 'p', 'scissors', 'scissor', 'sc', 'lizard', 'l', 'spock', 'sp'];
const VALID_COMPUTER_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock : ['scissors', 'lizard',] ,
  paper : ['rock', 'spock'] ,
  scissors : ['paper', 'lizard'] ,
  lizard : ['spock', 'paper'] ,
  spock : ['scissors', 'rock'] ,

}
let USER_WINS;
let COMPUTER_WINS;



async function displayWelcome() {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!\n');
  await sleep(500);
  prompt('Best 3 out of 5 wins the game.\n');
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
  prompt('spock    or   sp:\n');
  await sleep(500);

  prompt('Let\'s begin!');
}  

function mapUserInput(input) {

  if (input === 'r') {
    input = 'rock';
  } else if (input === 'p') {
    input = 'paper';
  } else if (input === 'sc' || input === 'scissor') {
    input = 'scissors';
  } else if (input === 'l') {
    input = 'lizard';
  } else if (input === 'sp') {
    input = 'spock';
  }

  return input;
}

function getUserChoice() {
  let userChoice = RLSYNC.question(prompt('Your choice: ')).toLowerCase();
  userChoice = mapUserInput(userChoice);
  console.log(`***** ${userChoice}`); ///

  while (!VALID_USER_CHOICES.includes(userChoice)) {
    prompt('Invalid choice.');
    userChoice = RLSYNC.question(prompt('Choose one aciton: rock, paper, scissors, lizard, spock'))
                .toLowerCase();
    userChoice = mapUserInput(userChoice);
    console.log(`***** ${userChoice}`);
  }

  return userChoice;
}

function getComputerChoice() {  
  let randomIndex = Math.floor(Math.random() * VALID_COMPUTER_CHOICES.length);
  let computerChoice = VALID_COMPUTER_CHOICES[randomIndex];

  return computerChoice;
}

function displayRounds() {
  let gameRound = 0;
  let score;
  USER_WINS = 0;
  COMPUTER_WINS = 0;
  
  while (gameRound <= 5) {
    if (USER_WINS === 3 || COMPUTER_WINS === 3) {
      break;
    }

    let currentUserChoice = getUserChoice();
    let currentComputerChoice = getComputerChoice();
    prompt(`Computer choice: ${currentComputerChoice}`);

    if (WINNING_COMBOS[currentUserChoice].includes(currentComputerChoice)) {
      USER_WINS += 1;
      gameRound += 1;
      prompt('You won!');
    } else if (currentUserChoice === currentComputerChoice) {
      prompt('Tie! Let\'s try that again.');
    } else {
      COMPUTER_WINS += 1;
      gameRound += 1;
      prompt('Computer won.');
    }

    score = `ROUND ${gameRound} SCORE -- You: ${USER_WINS}, Computer: ${COMPUTER_WINS}\n`;
    prompt(score);
  }
}

function displayWinner() {
  if (USER_WINS > COMPUTER_WINS) {
    prompt('FINAL RESULT:\nCONGRATULATIONS! You beat the computer at Rock, Paper, Scissors, Lizard, Spock!\n');

  } else if (COMPUTER_WINS > USER_WINS) {
    prompt('FINAL RESULT:\nBetter luck next time. Computer beat you at Rock, Paper, Scissors, Lizard, Spock!\n');

  } else {
    console.log('*** ERROR *** within displayWinner() and displayRounds()');
  }
}

function playAgain() {    
    while (true) {
      let playAgain = RLSYNC.question(prompt('Would you like to play again?\nPlease respond with "yes" or "no":  ')).toLowerCase();
      if (playAgain === 'yes' || playAgain === 'y') {
        break;
      } else if (playAgain === 'no' || playAgain === 'n') {
        prompt('Thanks for playing Rock, Paper, Scissors, Lizard, Spock! Goodbye!');
        return;
      } else {
        prompt('Invalid input: Restart the program to play again.');
        return;
      }
    }
  
    game();
}

async function game() {
  await displayWelcome();
  displayRounds();
  displayWinner();
  playAgain();
}

game();