function renderLicenseBadge(license) {
 return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

}

function renderLicenseLink(license) {
  console.log('i am here');
  return "";
}


function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under ${license} license`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("I am in generateMarkdown");
  console.log(data);
  const title = `# ${data.title}\n`;
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `${title}
${renderLicenseBadge(data.license)}

## TableOfContents


* [Description](#description)

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Contribution](#contribution)

* [TestInstructions](#testInstructions)

* [email](#email)

* [Github](#github)



### description
${data.description}  

### license
${renderLicenseSection(data.license)}


### Installatiom
${data.installation}

### usage
${data.usage}

### Contribution
${data.contribution}

__Contributors to the project: ${data.contribution}__

### Testing Instructions
${data.test_instructions}

### Email
${data.email}

### Github
${data.github}
`;
}

module.exports = generateMarkdown;
