// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
console.log('\n****README Generator****')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?>',
        validate: (answer) => answer ? true : console.log('*README needs a title!*')
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a description>',
        validate: (answer) => answer ? true : console.log('*README needs a description!*')
    },
    {
        type: 'confirm',
        name: 'TOC',
        message: 'Would you like a Table of contents?>'
    },
    {
        type: 'input',
        name: 'installMethod',
        message: 'How do you install this app?>',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is it used?>',
    },
    {
        type: 'confirm',
        name: 'media',
        message: 'Would you like to add a media file?>',
    },
    {
        type: 'input',
        name: 'file',
        message: 'paste relative file path to media link here>',
        when: (data) => data.media === true
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you need?>',
        choices: [
            'None',
            'Creative Commons Universal',
            'GNU General Public License',
            'ISC',
            'MIT',
            'Apache'
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute?>',
    },
    {
        type: 'input',
        name: 'test',
        message: 'how can people test your program?>',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub profile name?>',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email address?>'
    }

];
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('***Your README has been created!***'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    //try putting usage function here
    .then(function(data){
        writeToFile(generateMarkdown(data));
    })
}

// Function call to initialize app
init();
