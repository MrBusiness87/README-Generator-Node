var inquirer = require("inquirer");

inquirer
  .prompt([{
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your projects name?",
      name: "project"
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description"
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "stack",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "command"
      //npm i
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test"
      //npm test
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "using"
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "contributing"
    },
  ])