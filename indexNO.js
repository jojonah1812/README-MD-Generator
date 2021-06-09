
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




//   Section of questions for sections
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of you propject.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide instructions for someone to install the necessary programs to run your project.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide instructions and examples for use.  To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
      ```md
      ![alt text](assets/images/screenshot.png)
      ```',
      name: 'usage',
    },
    {
    type: 'list',
    message: 'Would you like to allow other developers to contribute to your project? Contributor Covenant',
    // (https://www.contributor-covenant.org/) 
    choices: ['Yes!', 'No!'],
    name: 'contributions',
    },
    {
    type: 'list',
    message: 'Have you created any tests you would like to make available to the user?',
    name: 'tests',
    },
  );



// ending section of code from Inquirer website
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );















// Link to Professional README guide
//  https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide



// // Opening code from Inquirer Website
// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });