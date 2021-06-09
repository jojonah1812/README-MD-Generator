
// Opening code from 9 Activity 19
const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'password',
    message: 'What is your password?',
    name: 'password',
  },
  {
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
  },
])
.then((response) =>
  response.confirm === response.password
    ? console.log('Success!')
    : console.log('You forgot your password already?!')
);























// Opening code from Inquirer Website
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });