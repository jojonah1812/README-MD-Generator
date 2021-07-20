const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

const generateReadMe = (answers) => {
  return `# ${answers.title}

### Designer Name
* Jonah Haase 
## Project Description
* ${answers.description}
# Table of Contents
1. [Links](#links)
2. [Mockup](#mockup)
3. [Project Installation](#project-installation)
4. [Instructions](#instructions-on-how-to-use-this-application)
5. [Tests](#tests)
6. [Contributions](#contributions)
7. [License](#license)
8. [Questions](#questions)

## Links
* ${answers.deploy}
* ${answers.gitHubRepo}
## Mockup
* ${answers.mockupAltText}
* ${answers.mockupFilePath}

## Project Installation
* ${answers.installation}
## Instructions on how to use this application
* ${answers.usage}
## Tests
* ${answers.tests}
## Contributions
* ${answers.contributions}
## License
* ${answers.license}

## Questions
If you have any questions, please feel free to contact me through my GitHub account or my email address.
* #### GitHub Username    jojonah1812
* #### GitHub Link    https://github.com/jojonah1812
* #### Email    jojonah@gmail.com
`;
};

///Inquierer used to gather input from user
inquirer
  .prompt([
    
    {
      type: "input",
      message: "What is the title of your new project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Please provide a description of your project and how it is intended to be used.",
      name: "description",
    },
    {
      type: "input",
      message:
        "Please provide instructions for someone to install the necessary programs to run your project.",
      name: "installation",
    },
    // {
    //   type: "input",
    //   message: "Please provide explain how the project is intended to be used.",
    //   name: "usage",
    // },
    {
      type: "confirm",
      message:
        "Would you like to allow other developers to contribute to your project? Contributor Covenant",
      name: "contributions",
      default: true,
    },

    {
      type: "input",
      message:
        "Have you created any tests you would like to make available to the user?",
      name: "tests",
      default: "NPM",
    },
    {
      name: "license",
      type: "list",
      message: "Would you like to add a license?",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      message: "Deployment link?",
      name: "deploy",
    },
    {
      type: "input",
      message: "GitHub Repository link?",
      name: "gitHubLink",
    },

    {
      type: "input",
      message: "Mockup file path?",
      name: "mockupFilePath",
    },
    {
      type: "input",
      message: "Mockup alternative text?",
      name: "mockupAltText",
    },
  ])

  ///PROMISE
  .then((answers) => {
    console.log(answers);
    //readMeContent is the template with answers from Inq.
    const readMeContent = generateReadMe(answers);
    ///Function to initialize
    fs.writeFile("README.md", readMeContent, (err) =>
      err
        ? console.log(err)
        : console.log("Nice Work! You have made the README.md!")
    );
  });
