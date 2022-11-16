// TODO: Create a function that returns a license badge based on which license is passed in
//const generateMarkdown = require ('inquirer');
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache'){
    return '[https://img.shields.io/npm/l/Aache%20License%202.0]'
  } if (license === 'GNU General Public License v3.0'){
    return '[https://img.shields.io/npm/l/GNU%20General%20Public%20License%20v3.0]'
  } if (license === 'MIT License'){
    return '[https://img.shields.io/npm/l/MIT%20License]'
  } if (license === 'BSD 2-Clause "Simplified" License'){
    return '[https://img.shields.io/npm/l/BSD%202-Clause%20%22Simplified%22%20License]'
  } if (license === 'BSD 3-Clause "New" or "Revised" License'){
    return '[https://img.shields.io/npm/l/BSD%203-Clause%20%22New%22%20or%20%22Revised%22%20License]'
  } if (license === 'Boost Software License 1.0'){
    return '[https://img.shields.io/npm/l/Boost%20Software%20License%201.0]'
  } if (license === 'Creative Commons Zero v1.0 Universial'){
    return '[https://img.shields.io/npm/l/Creative%20Commons%20Zero%20v1.0%20Universial]'
  } if (license === 'Eclipse Public License 2.0'){
    return '[https://img.shields.io/npm/l/Eclipse%20Public%20License%202.0]'
  } if (license === 'GNU Affero General Public License v3.0'){
    return '[https://img.shields.io/npm/l/GNU%20Affero%20General%20Public%20License%20v3.0]'
  } if (license === 'GNU General Public License v2.0'){
    return '[https://img.shields.io/npm/l/GNU%20General%20Public%20License%20v2.0]'
  } if (license === 'GNU Lesser General Public License v2.1'){
    return '[https://img.shields.io/npm/l/GNU%20Lesser%20General%20Public%20License%20v2.1]'
  } if (license === 'Mozilla Public License 2.0'){
    return '[https://img.shields.io/npm/l/Mozilla%20Public%20License%202.0]'
  } if (license === 'The Unlicense'){
    return '[https://img.shields.io/npm/l/The%20Unlicense]'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache'){
    return '[https://opensource.org/licenses/Apache-2.0]'
  } if (license === 'GNU General Public License v3.0'){
    return '[https://opensource.org/licenses/GPL-3.0]'
  } if (license === 'MIT License'){
    return '[https://opensource.org/licenses/MIT]'
  } if (license === 'BSD 2-Clause "Simplified" License'){
    return '[https://opensource.org/licenses/BSD-2-Clause]'
  } if (license === 'BSD 3-Clause "New" or "Revised" License'){
    return '[https://opensource.org/licenses/BSD-3-Clause]'
  } if (license === 'Boost Software License 1.0'){
    return '[https://opensource.org/licenses/BSL-1.0]'
  } if (license === 'Creative Commons Zero v1.0 Universial'){
    return '[https://choosealicense.com/licenses/cc0-1.0/]'
  } if (license === 'Eclipse Public License 2.0'){
    return '[https://opensource.org/licenses/EPL-2.0]'
  } if (license === 'GNU Affero General Public License v3.0'){
    return '[https://opensource.org/licenses/AGPL-3.0]'
  } if (license === 'GNU General Public License v2.0'){
    return '[https://opensource.org/licenses/GPL-2.0]'
  } if (license === 'GNU Lesser General Public License v2.1'){
    return '[https://opensource.org/licenses/LGPL-2.1]'
  } if (license === 'Mozilla Public License 2.0'){
    return '[https://opensource.org/licenses/MPL-2.0]'
  } if (license === 'The Unlicense'){
    return '[https://opensource.org/licenses/unlicense]'
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title},
  ## Description
  ${data.description}

  ##Table of Contents
  ${data.contents}

  ##Installation
  ${data.install}
  ${data.work}

  ##Credits
  ${data.credits}
  
  ##License
  ${data.renderLicenseBadge}
  ${data.renderLicenseLink}

`;
}

module.exports = generateMarkdown;
