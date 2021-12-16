// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Testing](#testing)
${renderLicenseLink(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contrib}

${renderLicenseSection(data.license)}

## Testing

${data.testing}

`;
}

module.exports = generateMarkdown;
