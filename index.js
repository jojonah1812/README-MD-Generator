// TODO: Include packages needed for this application
//Inquirer, FS, 
// TODO: Create an array of questions for user input

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
        message: 'What is the title of your project?',
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
        {
        type: 'input',
        message: 'Please provide instructions and examples for use.  To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        ```md
        ![alt text](assets/images/screenshot.png)
        ```',
        name: 'usage',
        },
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
        message: 'Would you like to add a license?)
        choices: [Public Domain, Permissive, LGPL, Copyleft, Proprietary]
        name: 'license',
        },




    );





  ])


const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
