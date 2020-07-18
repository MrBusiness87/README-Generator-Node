var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your projects name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description",
  },
  {
    type: "checkbox",
    message: "What kind of license should your project have? (choose one)",
    name: "stack",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "command",
    choices: "npm i",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
    choices: "npm test",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about installing the repo?",
    name: "installing",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
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