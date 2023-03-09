import fs from "fs/promises";
import inquirer from "inquirer";

// array of questions for user
let response = await inquirer 
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

    console.log(response);
    
    let data = 
    `# ${response.title}
    
    ## Description 
    
    ${response.description}

    ## Table Of Content 

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    ## Installation
    
    ${response.installation}
    
    
    ## Usage
    
    ${response.usage}
    
    ## License
    
    ${generateLicense()}
    
    ## Badges
    
    ${response.badges}
    
    ## Tests
    
    ${response.tests}
    
    ## Questions
    
    ${response.question}
    https://github.com/${response.gitHubUsername}`

// function to write README file
await fs.writeFile("README.md", data)

//function to generate license badge
function generateLicense() {
    if(response.license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if(response.license === "Mozilla Public License 2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }else if (response.license === "Open Database License (ODbL)") {
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
    }
}

//function to generate Table of Content
function generateTableOfContents() {
    if(response.tableOfContents) {
        return `
    ## Table Of Content 

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
`
    }
    }
