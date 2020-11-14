const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./generate-markdown');


//Got tutor to assiste with this. Was going to put into switch statement
const getLicense = value => {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]" +
        "(https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" +
        "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]" +
        "(https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]" +
        "(https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost Software 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]" +
        "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]" +
        "(https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]" +
        "(https://opensource.org/licenses/MPL-2.0)";
  }
};

function validateInput (value) {
  if (value !== ''){
    return true;
  }return "Input required to continue form"
}

const questions = [
  {
    //License
    type: "list",
    name: "license",
    message: "Please license for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "Mozilla",
    ],
    validate: validateInput,
  },
  {
    //title
    type: "input",
    name: "title",
    message: "Enter title of project",
    validate: validateInput,
  },
  {
    //usage
    type: "input",
    name: "usage",
    message: "Please describe how we can use this program/project.",
    validate: validateInput,
  },
  
  {
    type: "input",
    name: "description",
    message: "Enter description of project",
    validate: validateInput,
  },
  //Github info
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    validate: validateInput,
  },
    
    //attempt at email validation
    //https://medium.com/@vishutomar/java-script-email-validation-its-very-important-to-validate-the-email-id-6051b5857f5f
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
    validate: function (value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return "Not a valid email address. Please enter a valid email address.";
      }
    },
  },
    
  
  
];