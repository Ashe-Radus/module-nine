// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        message: 'How does the project work?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'please provide the credits for this project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Would you like a license? ',
    },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `project title`
    `project description`
    `table of contents`
    `how to install and run the project`
    `how to use the project`
    `credits`
    `license`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//need to append the fs file
fs.appendFile('log.txt', `${process.argv}\n`, (err) => 
err ? console.error(err) : console.log('logged!')
);