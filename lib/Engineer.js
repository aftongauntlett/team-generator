// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure: Employee is parent

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (name, role, id, email, school) {
    super (name, id, email);
    this.school = school;
  }
}

module.exports = Engineer;

// class SamplePerson extends ParentSomething {
//   constructor(prop1, prop2) {
//     super(prop1, prop2);
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }

//   getProp1() {
//     // return something...
//   }

//   setProp1() {
//     // do something...
//   }
    
// }
