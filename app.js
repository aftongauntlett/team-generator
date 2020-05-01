const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// create team
function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      message: "Please select an employee type:",
      name: "type",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Complete",
      ]
    }

  ]).then(userChoice => {
    if (userChoice.type === "Manager") {
      createEmployee("Manager");
    } else if (userChoice.type === "Engineer") {
      createEmployee("Engineer");
    } else if (userChoice.type === "Intern") {
      createEmployee("Intern");
    } else {
      console.info("Complete")
      end();
    }

  });
}

// define function to render HTML
function renderHtmlPage() {
  console.log("here")
  const html = render(teamMembers)
  console.log("here")
  fs.writeFile("index.html", html, err => {
    console.log(err)
  })
  console.log("here")
}

// This is our starter function.
function startMenu() {

  // Here we start things off by calling the createManager function
  createManager()
}

function end() {
  teamMembers.forEach(teamMember => {
    console.log(teamMember)
  })
  renderHtmlPage()
}


// Create All Employee Types and ask each question
function createEmployee(employeeType) {
  let questions = [
    {
      type: "input",
      message: "Enter name:",
      name: "name"
    },
    {
      type: "input",
      message: "Enter email:",
      name: "email"
    },
  ]

  // Use if else statements to ask the right questions based on employee type (engineer = github, intern = school, manager = office #)
  if (employeeType === "Manager") {
    questions.push({
      type: "input",
      message: "Enter Office Number:",
      name: "officeNumber"
    })
  } else if (employeeType === "Intern") {
    questions.push({
      type: "input",
      message: "Enter School:",
      name: "school"
    })
  } else if (employeeType === "Engineer") {
    questions.push({
      type: "input",
      message: "Enter Github Username:",
      name: "gitUsername"
    })
  }
  // prompt through the proper questions here
  inquirer.prompt(questions).then(response => {
    if (employeeType === "Manager") {
      const managerObj = new Manager(response.name, teamMembers.length + 1, response.email, response.officeNumber)
      teamMembers.push(managerObj)
    } else if (employeeType === "Engineer") {
      const engineerObj = new Engineer(response.name, teamMembers.length + 1, response.email, response.gitUsername)
      teamMembers.push(engineerObj)
    } else if (employeeType === "Intern") {
      const internObj = new Intern(response.name, teamMembers.length + 1, response.email, response.school)
      teamMembers.push(internObj)
    }
    // call function to create the team
    createTeam();
  });
}

function createManager(genericData) {
  createEmployee("Manager")
}

// run
startMenu();