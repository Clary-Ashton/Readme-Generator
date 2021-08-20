/*  This is a function that returns a license badge based on which license is passed in. In this case, 
there is a MIT license.*/

function renderLicenseBadge(license) {
  let licenseType = license.license;  
   if(licenseType === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
}

 // This is a function that returns the MIT license link
 
function renderLicenseLink(license) {
  return "https://img.shields.io/github/license/<Clary-Ashton>/<Readme-Genrator>"
}

// This is a function that returns the license section of README

function renderLicenseSection(license) {
  return `# ${data.license}`
}

// Here I have created a function to generate markdown for README

function generateMarkdown(data) {
   return `# ${data.title}

  
https://github.com/Clary-Ashton/Readme-Generator

 
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
   # Licence
${data.license}
# Contact
   ${data.email}
   # link
   ${data.link}

  `}
 

  module.exports = generateMarkdown;


