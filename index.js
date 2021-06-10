// TODO: Include packages needed for this application
//Inquirer, FS, 
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input


// String.raw


const generateReadMe = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;








inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitHub',
    },
    {
      type: 'input',
      message: 'What is your link?',
      name: 'link',
    },
    {
      type: 'input',
      message: 'What is the title of your new project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide instructions for someone to install the necessary programs to run your project.',
      name: 'installation',
    },
    // {
      // type: 'input',
      // message: 'Please provide instructions and examples for use.  To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
      // ```md
      // ![alt text](assets/images/screenshot.png)
      // ```',
      // name: 'usage',
    // },
    {
      type: 'confirm',
      message: 'Would you like to allow other developers to contribute to your project? Contributor Covenant',
      // (https://www.contributor-covenant.org/) 
      name: 'contributions',
    },
    {
      type: 'list',
      message: 'Have you created any tests you would like to make available to the user?',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Would you like to add a license?',
      choices: ['Public Domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary'],
      name: 'license',
    },
  ])


// const questions = [];   This code was given. DO I need it?

///PROMISE
// TODO: Create a function to write README file

  .then((answers)  =>  {
    console.log(answers)
    const readMeContent = generateReadMe(answers);
// TODO: Create a function to initialize app
    fs.writeFile('index.js', readMeContent, (err) =>
    err ? console.log(err) :console.log('Nice Work! You have made the index.js!')
    );
  });


// });

// function init() {}

// Function call to initialize app
init();
