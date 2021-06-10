// TODO: Include packages needed for this application
//Inquirer, FS, 
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
// to test this new program, delete current README
//TableContents - look at previous assignments readme files for instructions/examples on how to make one.



const generateReadMe = (answers) => {
//md text, template        ```````````````backticks  `(MD content)`
         ////add logic here for entire readme.md - may contributions
return `# ${answers.title}

## Project Description
${answers.description}
## Project Installation
${answers.installation}
## Instructions on how to use this application
${answers.usage}
## Tests
${answers.tests}
### Designer Name    ${answers.name}
### Email    ${answers.email}
### GitHub Username    ${answers.github}
### GitHub Link    ${answers.link}
## Would you like other developers to contribute to your work?
${answers.contributions}
## License
${answers.license}
`
}



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
    {
      type: 'input',
      message: 'Please provide explain how the project is intended to be used.',
      name: 'usage',
    },
    {
      type: 'confirm',
      message: 'Would you like to allow other developers to contribute to your project? Contributor Covenant',
      name: 'contributions',
      default: true,
    },

     {
      type: 'input',
      message: 'Have you created any tests you would like to make available to the user?',
      name: 'tests',
      default: 'NPM',
    },
    {
      name: 'license',
      type: 'list',
      message: 'Would you like to add a license?',
      choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
      ]
    },
  ])

///PROMISE
// TODO: Create a function to write README file
//after inq, take answers and make content of template(line90)
  .then((answers)  =>  {
    console.log(answers);
    //readMeContent is the template with answers from Inq.
    const readMeContent = generateReadMe(answers);
// TODO: Create a function to initialize app
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) :console.log('Nice Work! You have made the README.md!')
    );
  });