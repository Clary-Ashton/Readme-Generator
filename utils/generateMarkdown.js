// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string

function renderLicenseLink(license) {
  return "https://img.shields.io/github/license/<Clary-Ashton>/<Readme-Genrator>"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  return `# ${data.license}`
}

//https://img.shields.io/github/license/<Clary-Ashton>/<Readme-Genrator>

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.github}/${data.title}

 # Licence
   ${data.license}

# Description
${data.description}

# Table of Contents
* [Installation](#Installation)
* [Usage](#usage)
* [Contribution](#Contribution)
* [License](#license)
* [Tests](#tests)
* [Contact](#contact)
 
 # Installation
  ${data.installation}
 # Usage
   ${data.usage}
 # Contribution
  ${data.contribution}
   # Tests
   ${data.tests}
   # Contact
   ${data.email}


   
`
}
 









module.exports = generateMarkdown;
