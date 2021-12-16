// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Project title required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Description required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installInstructions",
    message: "Enter instructions to install your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Description required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter how to use your application:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Usage required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contrib",
    message: "How do others contribute to your project?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Contribution guidelines required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "testing",
    message:
      "What tests can be run for your application? Explain how to run them.",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Testing instructions required!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What type of license is your project covered under?",
    choices: [],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("GitHub username required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What email address can you be reached at?",
    validate: (input) => {
      // Use regex to validate is in email format ([A-z,0-9,_,-]@[A-z,0-9,_,-].[A-z])
      if (input) {
        return true;
      } else {
        console.log("Email address required!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
