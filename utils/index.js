// First here, I am including the packages (dependencies) needed for this application

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs')
const utils = require('utils')
const generateMarkdown = require('./generateMarkdown');

// Then I create an array of questions for user input
 
const questions = [
    {
      type: 'input',
      message: 'what is the title of the project?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'what is the purpose of the project? write a short description of the project',
      name: 'description'
    },
     
    {
  type: 'input',
  message: 'what command did you use to install dependencies?',
  name: 'installation'
},
{
  type: 'input',
  message: 'what to know before using this App? give some instructions', 
  name: 'usage'
},
{
    type: 'input',
    message: 'how can a user contribute to this project?',
    name: 'contribution'
  },
  {
type: 'input',
message: 'what command should be use to run the tests?',
name: 'tests'
},
{
type: 'input',
message: 'what kind of license is being used for this project?',
name: 'license'  
},
{
    type: 'input',
    message: 'what is your GitHub username?',
    name: 'github'
  },
  {
type: 'input',
message: 'What is your email address?',
name: 'email'
},
{
type: 'input',
message: 'what is your link of demo video of this project?',
name: 'demo'  
},

]
 

// Here, I have created a function to write README file

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname, fileName), data);
}
  


// This is a function to initialize app

function init() {
inquirer.prompt(questions)
.then(function(data) {
    writeToFile('generateREADME.md', generateMarkdown(data));
})

}
// Function call to initialize app
init();
