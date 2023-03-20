// TODO: Include packages needed for this application
const generateHTML = require('./utils/generateMarkdown')
const inquirer = require("inquirer")
const fs = require("fs")


const questions = [
    {
        type:"input",
        message:"Enter Project title?",
        name:'title'
    },
    {
        type:"input",
        message:"Enter Description?",
        name:'description'
    },
    {
        type:"input",
        message:"Enter installation instructions?",
        name:'installation'
    },
    {
        type:"input",
        message:"usage information?",
        name:'usage'
    },
    {
        type:"input",
        message:"Enter contribution guidelines?",
        name:'contribution'
    },
    {
        type:"input",
        message:"Enter test instructions?",
        name:'test_instructions'
    },  
    {
        type:"list",
        message:"Enter license?",
        name:'license',
        choices:["MIT","ISC","APACHE2.0","GPL2.0","No License"]
    },
    {
        type:"input",
        message:"Enter Github?",
        name:'github'
    },  
    {
        type:"input",
        message:"Enter email?",
        name:'email'
    },  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log('response: ' + JSON.stringify(response));
        fs.writeFileSync("READMe.md",generateHTML(response),function(err){
            if(err) throw err;
        })
    })

}

// Function call to initialize app
init();
