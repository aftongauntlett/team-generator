const Employee = require("./Employee");
class Engineer extends Employee {

  constructor(name, id, email, gitUsername) {
    super(name, id, email, "Engineer");
    this.gitUsername = gitUsername;
  }

  getGithub() {
    return this.gitUsername;
  }
}

module.exports = Engineer;

