function renderLicenseBadge(license) {
 return `[GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

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
${licenseBadge}

## TableOfContents


* [Description](#description)
${data.description}

* [License](#license)
${data.license}

* [Installation](#installation)
${data.installation}

* [Usage](#usage)
${data.usage}

* [Contribution](#contribution)
${data.contribution}

* [TestInstructions](#testInstructions)
${data.test_instructions}

* [email](#email)
${data.email}

* [Github](#github)
${data.github}

### description
${data.description}  

### license
${licenseSection}
`;
}

module.exports = generateMarkdown;
