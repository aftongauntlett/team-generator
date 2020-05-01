// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, role, id, email) {
    if (!name) {
      throw new Error("You are missing employee name.")
    }
    if (!role)
      throw new Error("You are missing role information.")
  }
}


// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.



module.exports = Employee;

name
id
email
getName()
getId()
getEmail()
getRole() // Returns 'Employee' The other three classes will extend Employee. In addition to Employee's properties and methods, Manager will also have:
officeNumber
getRole() // Overridden to return 'Manager' In addition to Employee's properties and methods, Engineer will also have:
github // GitHub username
getGithub()
getRole() // Overridden to return 'Engineer' In addition to Employee's properties and methods, Intern will also have:
school
getSchool()
getRole() // Overridden to return 'Intern'