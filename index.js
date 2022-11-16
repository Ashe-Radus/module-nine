// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile, fstat } = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Please list the contents of the project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install and run the project?',
    },
    {
        type: 'input',
        name: 'work',
        message: 'How do you use the project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'please provide the credits for this project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please choose a license for this project. ',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universial', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fstat.writeFile('README.md', generateMarkdown(data),
   error => {
    if (error) {
        console.log('Please provide information')
    }
   })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();