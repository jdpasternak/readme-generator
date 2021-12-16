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
    name: "installation",
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
    choices: [
      { name: `Academic Free License v3.0`, value: `afl-3.0` },
      { name: `Apache license 2.0`, value: `apache-2.0` },
      { name: `Artistic license 2.0`, value: `artistic-2.0` },
      { name: `Boost Software License 1.0`, value: `bsl-1.0` },
      { name: `BSD 2-clause "Simplified" license`, value: `bsd-2-clause` },
      {
        name: `BSD 3-clause "New" or "Revised" license`,
        value: `bsd-3-clause`,
      },
      { name: `BSD 3-clause Clear license`, value: `bsd-3-clause-clear` },
      { name: `Creative Commons license family`, value: `cc` },
      { name: `Creative Commons Zero v1.0 Universal`, value: `cc0-1.0` },
      { name: `Creative Commons Attribution 4.0`, value: `cc-by-4.0` },
      {
        name: `Creative Commons Attribution Share Alike 4.0`,
        value: `cc-by-sa-4.0`,
      },
      { name: `Do What The F*ck You Want To Public License`, value: `wtfpl` },
      { name: `Educational Community License v2.0`, value: `ecl-2.0` },
      { name: `Eclipse Public License 1.0`, value: `epl-1.0` },
      { name: `Eclipse Public License 2.0`, value: `epl-2.0` },
      { name: `European Union Public License 1.1`, value: `eupl-1.1` },
      { name: `GNU Affero General Public License v3.0`, value: `agpl-3.0` },
      { name: `GNU General Public License family`, value: `gpl` },
      { name: `GNU General Public License v2.0`, value: `gpl-2.0` },
      { name: `GNU General Public License v3.0`, value: `gpl-3.0` },
      { name: `GNU Lesser General Public License family`, value: `lgpl` },
      { name: `GNU Lesser General Public License v2.1`, value: `lgpl-2.1` },
      { name: `GNU Lesser General Public License v3.0`, value: `lgpl-3.0` },
      { name: `ISC`, value: `isc` },
      { name: `LaTeX Project Public License v1.3c`, value: `lppl-1.3c` },
      { name: `Microsoft Public License`, value: `ms-pl` },
      { name: `MIT`, value: `mit` },
      { name: `Mozilla Public License 2.0`, value: `mpl-2.0` },
      { name: `Open Software License 3.0`, value: `osl-3.0` },
      { name: `PostgreSQL License`, value: `postgresql` },
      { name: `SIL Open Font License 1.1`, value: `ofl-1.1` },
      {
        name: `University of Illinois/NCSA Open Source License`,
        value: `ncsa`,
      },
      { name: `The Unlicense`, value: `unlicense` },
      { name: `zLib License`, value: `zlib` },
    ],
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
  const dummyData = {
    title: "Zero Interest Credit Card Calculator",
    description:
      "Calculate how much you owe each month on all your credit cards with 0% Promo APR.",
    installInstructions:
      "This app runs in GitHub pages.  There are no instructions for installation.",
    usage:
      "Add, edit, and delete credit cards.  View total due for each card each month, and an overall total due on all cards each month.",
    contrib:
      "To contribute, please submit issues, fork the repo, and submit your PR for review.",
    testing: "No testing at this time.",
    license: "bsl-1.0",
    github: "jdpasternak",
    email: "jdp.pasternak@gmail.com",
  };
}

// Function call to initialize app
init();
