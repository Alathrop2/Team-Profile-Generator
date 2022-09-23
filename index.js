// included packages needed for this app
const fs = require('fs');
const inquirer = require('inquirer');
// const { inherits } = require('util');
const generateHTML = require('./develop/generateHTML');

const startQ = [
  {
    type: 'list',
    message: 'Which team memeber do you want to build?',
    name: 'Job Title',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
];
const finalQ = [
  {
    type: 'list',
    message: 'Do you want to add anyone else?',
    name: 'Final',
    choices: ['Yes', 'No'],
  },
];
const managerQ = [
  {
    type: 'input',
    message: 'What is the manager Name?',
    name: 'ManagerName',
  },
  {
    type: 'input',
    message: 'What is their employee ID?',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'What is their email address?',
    name: 'Email',
  },
  {
    type: 'input',
    message: 'What is their office number?',
    name: 'OfficeNumber',
  },
];

const engineerQ = [
  {
    type: 'input',
    message: 'What is this engineers name?',
    name: 'EngineerName',
  },
  {
    type: 'input',
    message: 'What is their employee ID',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'What is their Github username?',
    name: 'Github',
  },
  {
    type: 'input',
    message: 'what is their email address?',
    name: 'Email',
  },
];

const internQ = [
  {
    type: 'input',
    message: 'What is this interns name?',
    name: 'InternName',
  },
  {
    type: 'input',
    message: 'What is their employee ID?',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'What is their emai address?',
    name: 'Email',
  },
  {
    type: 'input',
    message: 'What school did they attend?',
    name: 'School',
  },
];

let employeeData = [];

const askFinalQ = () => {
  inquirer.prompt(finalQ).then((answers) => {
    if (answers['Final'] == 'Yes') {
      init();
    } else {
      let fileData = generateHTML(employeeData);
      writeToFile('./index.html', fileData);
      console.log('your HTML will be added');
    }
  });
};
//* Create a function to write HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

//* Create a function to initialize app
function init() {
  inquirer.prompt(startQ).then((answers) => {
    // console.log(answers['Job Title']);
    if (answers['Job Title'] == 'Manager') {
      inquirer.prompt(managerQ).then((answers) => {
        // console.log(answers);
        employeeData.push(answers);
        console.log(employeeData);
        askFinalQ();
      });
    } else if (answers['Job Title'] == 'Engineer') {
      inquirer.prompt(engineerQ).then((answers) => {
        // console.log(answers);
        employeeData.push(answers);
        console.log(employeeData);
        askFinalQ();
      });
    } else if (answers['Job Title'] == 'Intern') {
      inquirer.prompt(internQ).then((answers) => {
        // console.log(answers);
        employeeData.push(answers);
        console.log(employeeData);
        askFinalQ();
      });
    }
    // console.log(answers);
  });
}

init();
//! requirements for grade
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// todo an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// todo my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// todo that GitHub profile opens in a new tab
// WHEN I start the application
// ? I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
//? I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// ? I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// ? I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
//? I exit the application, and the HTML is generated
