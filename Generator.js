var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
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
      name: "project",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "stack",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "command",
      //npm i
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test",
      //npm test
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "using",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
  ])
  .then(function (data) {
    var filename = data.username.toLowerCase().split(" ").join("") + ".txt";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });
