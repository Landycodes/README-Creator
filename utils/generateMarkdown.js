// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
  let badge = `[![license](https://img.shields.io/badge/License-apache_2.0-brightgreen.svg)]`
  return badge
  } else if (license === 'Creative Commons Universal') {
    let badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`
    return badge
  } else if (license === 'GNU General Public License') {
    let badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    return badge
  } else if (license === 'ISC') {
    let badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    return badge
  } else if (license === 'MIT') {
    let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    return badge
  } else if (license === 'None'){
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
   return `(https://www.apache.org/licenses/LICENSE-2.0)`
  } else if ( license === 'Creative Commons Universal') {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if ( license === 'GNU General Public License') {
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if ( license === 'ISC') {
    return `(https://www.isc.org/licenses/)`
  } else if ( license === 'MIT') {
    return `(https://mit-license.org/)`
  } else if ( license === 'None') {
    return ''
  }
  // add accurate sites for each
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return `  Copyright 2022 Andrew Landry
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else if (license === 'Creative Commons Universal') {
    return `  The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law,

    including all related and neighboring rights, to the extent allowed by law.
    You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.`
  } else if (license === 'GNU General Public License') {
    return `  Copyright (C) 2022  Andrew Landry
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.`
  } else if (license === 'ISC') {
    return `  Copyright © 2004-2013 by Internet Systems Consortium, Inc. (“ISC”)
    Copyright © 1995-2003 by Internet Software Consortium
    
    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED “AS IS” AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
  } else if ( license === 'MIT') {
    return `  # Released under MIT License

    Copyright (c) 2013 Mark Otto.
    
    Copyright (c) 2017 Andrew Fong.
    
    Permission is hereby granted, free of charge,
    to any person obtaining a copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === 'None') {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //creates and appends each Table of content
  let TOC = `## Table Of Contents\n >[Description](#description)<br/>`
  let tocInstall = ` >[Install Method](#installation-instructions)<br/>`
  let tocUsage = ` >[Usage](#usage)<br/>`
  let tocContribute = ` >[Contributing](#contributing)<br/>`
  let tocTest = ` >[Testing](#testing)<br/>`
  let tocContact = ` >[Contact & Questions](#contact--questions)<br/>`
  let tocLic = ` >[License](#license)<br/>`

  //creates each section and excludes empty sections
  let install = `## Installation instructions\n \t${data.installMethod}`
  if (data.installMethod === ''){
    install = ''
    tocInstall = ''
  }
  let usage = `## Usage\n \t${data.usage}\n`
  if (data.usage === ''){
    usage = ''
    tocUsage = ''
  }
  let file = `![img](${data.file})`
  if (data.file === '' || data.file === undefined){file = ''}
  let contribute = `## Contributing\n \t${data.contribution}`
  if (data.contribution === ''){
    contribute = ''
    tocContribute = ''
  }
  let test = `## Testing\n \t${data.test}`
  if (data.test === ''){
    test = ''
    tocTest = ''
  }
  let contact = `## Contact & questions\n Feel free to reach me by email for any questions!<br>`
  if (data.Email === ''){
    contact = ''
    tocContact = ''
  }
  let github = `GitHub: [${data.GitHub}](https://github.com/${data.GitHub})<br>`
  if (data.GitHub === ''){github = ''}
  let email = `Email: ${data.Email}\n ***`
  if (data.Email === ''){email = ''}
  let lisec = `## License\n \t${renderLicenseSection(data.license)}`
  if (data.license === 'None'){
    lisec = ''
    tocLic = ''
  }
  //remove table of contents if all sections are empty
  if (data.TOC === false) {
    TOC = ''
    tocInstall = ''
    tocUsage = ''
    tocContribute = ''
    tocTest = ''
    tocContact = ''
    tocLic = ''
  }

  //prints readme data
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license) + renderLicenseLink(data.license)}\n
  ## Description 
    ${data.desc}\n 

  ${TOC}
  ${tocInstall}
  ${tocUsage}
  ${tocContribute}
  ${tocTest}
  ${tocContact}
  ${tocLic}

  ${install}
  ${usage}
  ${file}
  ${contribute}
  ${test}
  ${contact}
  ${github}
  ${email}
  ${lisec}
`;
}
// console.log(license)
module.exports = generateMarkdown;
