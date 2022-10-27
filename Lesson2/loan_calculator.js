const RLSYNC = require('readline-sync');
const MESSAGES = require('./loan_calc_messages.json');
const LANG = RLSYNC.question(MESSAGES['language']);
let prompt = (message, extraMessage = '') => {
  if (LANG === 'en') {
    console.log(`> ${MESSAGES['en'][message]}` + extraMessage);
  } else if (LANG === 'es') {
    console.log(`> ${MESSAGES['es'][message]}` + extraMessage);
  }
};

let repeat = true;
while (repeat) {
  prompt('welcome');

  let loanAmount = RLSYNC.question(prompt('loanAmount'));
  loanAmount = Number(loanAmount);
  while (Number.isNaN(loanAmount)) {
    prompt('invalidLoanAmount');
    loanAmount = RLSYNC.question(prompt('loanAmount'));
    loanAmount = Number(loanAmount);
  }

  let annualIR = RLSYNC.question(prompt('apr'));
  annualIR = Number(annualIR);
  while (Number.isNaN(annualIR)) {
    prompt('invalidAPR');
    annualIR = RLSYNC.question(prompt('apr'));
    annualIR = Number(annualIR);
  }
  let monthlyIR = (annualIR / 100) / 12;
  console.log(`**monthlyIR = ${monthlyIR}`);

  let yearsOrMonths = RLSYNC.question(prompt('yearsOrMonths'));
  let validYearsOrMonths = ['years', 'months', 'anos', 'años', 'meses'];
  while (!validYearsOrMonths.includes(yearsOrMonths)) {
    prompt('invalidYearsOrMonths');
    yearsOrMonths = RLSYNC.question(prompt('yearsOrMonths'));
  }
  let loanDuration = RLSYNC.question(prompt('loanDuration', yearsOrMonths + '.'));
  loanDuration = Number(loanDuration);
  while (Number.isNaN(loanDuration)) {
    prompt('invalidLoanDuration');
    loanDuration = RLSYNC.question(prompt('loanDuration', yearsOrMonths + '.'));
    loanDuration = Number(loanDuration);
  }
  let years = ['years', 'anos', 'años'];
  if (years.includes(yearsOrMonths)) {
    loanDuration *= 12;
  }

  let monthlyPayment = loanAmount *
                (monthlyIR / (1 - Math.pow((1 + monthlyIR), (-loanDuration))));

  prompt('monthlyPayment', '$' + monthlyPayment.toFixed(2) + '.');

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