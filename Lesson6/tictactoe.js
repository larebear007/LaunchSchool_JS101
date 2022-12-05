const RLSYNC = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

let displayBoard = (board) => {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}
let initializeBoard = () => {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

let board = initializeBoard();
displayBoard(board);

let playerChoosesSquare = (board) => {
  let square;
  let emptySquares = Object.keys(board).filter(key => board[key] === INITIAL_MARKER);

  while (true) {
    square = RLSYNC.question(`Choose a square (${emptySquares.join(', ')}): `).trim();
    if (emptySquares.includes(square)) break;
    console.log('Sorry, that square is not available.');
  }
  
  board[square] = HUMAN_MARKER;
}

playerChoosesSquare(board);
displayBoard(board);