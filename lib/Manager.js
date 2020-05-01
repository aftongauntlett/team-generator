const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        console.log("id", id)
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.email;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;