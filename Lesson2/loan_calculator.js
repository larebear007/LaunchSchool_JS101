// Dependecies
const RLSYNC = require('readline-sync');
const MESSAGES = require('./loan_calc_messages.json');
const LANG = RLSYNC.question(MESSAGES['language']);
let prompt = (message, extraMessage='') => {
  if (LANG === 'en') {
    console.log(`> ${MESSAGES['en'][message]}` + extraMessage);
  } else if (LANG === 'es') {
    console.log(`> ${MESSAGES['es'][message]}` + extraMessage);
  }
}

let repeat = true;
while (repeat) {
  prompt('welcome');

  // INFORMATION
  // 1. loan amount
  let loanAmount = RLSYNC.question(prompt('loanAmount'));
  loanAmount = Number(loanAmount);
  // check valid input (without commas or extra chars)
  while (Number.isNaN(loanAmount)) {
    prompt('invalidLoanAmount');
    loanAmount = RLSYNC.question(prompt('loanAmount'));
    loanAmount = Number(loanAmount);
  }

  // 2. apr -> monthly
  let annualIR = RLSYNC.question(prompt('apr'))
  annualIR = Number(annualIR);
  // check for invalid input
  while (Number.isNaN(annualIR)) {
    prompt('invalidAPR');
    annualIR = RLSYNC.question(prompt('apr'));
    annualIR = Number(annualIR);
  }
  let monthlyIR = (annualIR / 100) / 12;
  console.log(`**monthlyIR = ${monthlyIR}`);

  // 3. loan duration -> months
  let yearsOrMonths = RLSYNC.question(prompt('yearsOrMonths'));
  // check for invalid input
  let validYearsOrMonths = ['years', 'months', 'anos', 'años', 'meses'];
  while (!validYearsOrMonths.includes(yearsOrMonths)) {
    prompt('invalidYearsOrMonths');
    yearsOrMonths = RLSYNC.question(prompt('yearsOrMonths'));
  }
  let loanDuration = RLSYNC.question(prompt('loanDuration', yearsOrMonths + '.'));
  loanDuration = Number(loanDuration);
  // check for invalid input
  while (Number.isNaN(loanDuration)) {
    prompt('invalidLoanDuration');
    loanDuration = RLSYNC.question(prompt('loanDuration', yearsOrMonths + '.'));
    loanDuration = Number(loanDuration);
  }
  let years = ['years', 'anos', 'años'];
  if (years.includes(yearsOrMonths)) {
    loanDuration = loanDuration * 12;
  }

  // CALCULATION
  let monthlyPayment = loanAmount * (monthlyIR / (1 - Math.pow((1 + monthlyIR), (-loanDuration))));
  prompt('monthlyPayment', '$' + monthlyPayment.toFixed(2) + '.');

  // REPEAT
  let repeatQuestion = RLSYNC.question(prompt('repeat'));
  switch (LANG) {
    case 'en':
      if (repeatQuestion.toLowerCase() === 'yes' || repeatQuestion.toLowerCase() === 'y') {
        repeat = true;
      } else if (repeatQuestion.toLowerCase() === 'no' || repeatQuestion.toLowerCase() === 'n') {
        repeat = false;
        prompt('goodbye');
      } else {
        repeat = false;
        prompt('badInputgoodbye');
      }
      break;
    case 'es':
      if (repeatQuestion.toLowerCase() === 'si' || repeatQuestion.toLowerCase() === 's') {
        repeat = true;
      } else if (repeatQuestion.toLowerCase() === 'no' || repeatQuestion.toLowerCase() === 'n') {
        repeat = false;
        prompt('goodbye');
      } else {
        repeat = false;
        prompt('badInputGoodbye');
      }
      break;
  }
}