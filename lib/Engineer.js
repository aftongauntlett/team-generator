const Employee = require("./Employee");
class Engineer extends Employee {

  // role doesn't need to be in the constructor?
  constructor(name, id, email, gitUsername) {
    super(name, id, email);
    this.gitUsername = gitUsername;
  }
  getRole() {
    return "Engineer"
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGithub() {
    return this.gitUsername;
  }
}

module.exports = Engineer;

