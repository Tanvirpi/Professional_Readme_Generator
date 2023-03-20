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

* [Readme_Link](#Readme_Link)

* [Demo_Video](#Demo_Video)



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

### Readme_Link
[Live](https://github.com/Tanvirpi/Professional_Readme_Generator/blob/main/READMe.md#github)

### Demo_Video
https://drive.google.com/file/d/1v3P9PnHvyCJ2NRze1I7Y5IoDpBIIKSBK/view?usp=share_link

`;
}

module.exports = generateMarkdown;
