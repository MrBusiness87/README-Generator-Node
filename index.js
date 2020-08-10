var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [{
    type: "input",
    message: "GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Project name:",
    name: "title",
  },
  {
    type: "input",
    message: "Description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Examples of use for application:",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What kind of license should your project have? (choose one)",
    name: "stack",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    message: "Dependencies needed:",
    name: "command",
  },
  {
    type: "input",
    message: "Installing the repo:",
    name: "installing",
  },
  {
    type: "input",
    message: "Contributing to repo:",
    name: "contributing",
  },
];

// function to write README file
function writeToFile(data) {}
// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    var filename = data.title.toLowerCase().split(" ").join("") + ".md";
    fs.writeFile(filename, generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("!FILE CREATED!");
    });
  });
}

// function call to initialize program
init();