
const master = [
    {
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all Employees", "View all Roles", "View all Departments","Add Employee", "Add Role", "Add Department", "Update Employee Role"]
    }
]

const addEmployee = [
    {
        name: "addFirstName",
        type: "input",
        message: "Please add your employee's first name."
    },
    {
        name: "addLastName",
        type: "input",
        message: "Please add you employee's last name."
    },
    {
        name: "addRole",
        type: "list",
        message: "Please select your employee's role.",
        choices: []
    },
    {
        name: "addManager",
        type: "list",
        message: "Please select your employee's manager.",
        choices: []
    },
    //console log - added first last name to database
]

const addRole = [
    {
        name: "addRole",
        type: "input",
        message: "Please add the title of the role."
    },
    {
        name: "addSalary",
        type: "input",
        message: "Please enter the salary for this role."
    },
    {
        name: "addDepartment",
        type: "list",
        message: "Please select the department this role falls under.",
        choices: []
    }
]

const addDepartment = [
    {
        name: "addDepartment",
        type: "input",
        message: "Please enter the name of the new department."
    }
]

const updateEERole = [
    {
        name: "updateRole",
        type: "list",
        message: "Please select the employee you would like to update.",
        choices: []
    }
]

//Extra Features

//const updateEEManager

//view all employees

//view all employees by department

//view all employees by manager

//remove employee

//remove role
 
//remove department

module.exports = master;
module.exports = addRole;
module.exports = addEmployee;
module.exports = addDepartment;
module.exports = updateEERole;