import fs from "fs";
import path from "path";
import inquirer from "inquirer";

// array of questions for user
const response = await inquirer 
    .prompt([
        {
            name: 'title',
            message: "Project Title",
            type: 'input',
        },
        {
            name: 'description',
            message: "Describe your project",
            type: 'input',
        },
        {
            name: 'tableOfContents',
            message: "Use if your README is very long to make it easy for users to find what they need. Would you like to include a Table of Content?",
            type: 'confirm',
        },
        {
            name: 'installation',
            message: "What are the steps required to install your project?",
            type: 'input',
        },
        {
            name: 'usage',
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            type: 'input',
        },
        {
            name: 'license',
            type: 'list',
            message: "Choose a License",
            choices: ['MIT', 'Mozilla Public License 2.0', 'Open Database License (ODbL)'],
        },
        {
            name: 'contributing',
            message:"Would you like to include anyone that helped in your project?",
            type: 'input',
        },
        {
            name: 'tests',
            message: "Did you Write tests for your application? Then provide examples on how to run them.",
            type: 'input',
        },
        {
            name: 'question',
            message: "Do you have any question?",
            type: 'input',
        },
        {
            name: 'gitHubUsername',
            message: "If you have any questions please include your GitHub Username then we can contact you.",
            type: 'input',
        },
       
    ]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
