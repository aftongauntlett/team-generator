class Employee {
  constructor(name, id, email, role) {
    if (!name) {
      throw new Error("Employee name not entered.");
    }
    if (!id) {
      throw new Error("Employee ID not entered.");
    }
    if (!email) {
      throw new Error("Email address not entered.");
    }

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getRole() {
    return this.role
  }

  getName() {
    return this.name
  }

  getId() {
    return this.email;
  }

  getEmail() {
    return this.email;
  }

}

module.exports = Employee;

