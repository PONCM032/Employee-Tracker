var inquirer = require("inquirer");
var connection = require("./connection");

console.log(`
::::::::::   :::   :::   :::::::::  :::        ::::::::  :::   ::: :::::::::: :::::::::: 
:+:         :+:+: :+:+:  :+:    :+: :+:       :+:    :+: :+:   :+: :+:        :+:         
+:+        +:+ +:+:+ +:+ +:+    +:+ +:+       +:+    +:+  +:+ +:+  +:+        +:+          
+#++:++#   +#+  +:+  +#+ +#++:++#+  +#+       +#+    +:+   +#++:   +#++:++#   +#++:++#      
+#+        +#+       +#+ +#+        +#+       +#+    +#+    +#+    +#+        +#+            
#+#        #+#       #+# #+#        #+#       #+#    #+#    #+#    #+#        #+#             
########## ###       ### ###        ########## ########     ###    ########## ##########      

::::::::::: :::::::::      :::      ::::::::  :::    ::: :::::::::: :::::::::                
    :+:     :+:    :+:   :+: :+:   :+:    :+: :+:   :+:  :+:        :+:    :+:                
    +:+     +:+    +:+  +:+   +:+  +:+        +:+  +:+   +:+        +:+    +:+                 
    +#+     +#++:++#:  +#++:++#++: +#+        +#++:++    +#++:++#   +#++:++#:                   
    +#+     +#+    +#+ +#+     +#+ +#+        +#+  +#+   +#+        +#+    +#+                   
    #+#     #+#    #+# #+#     #+# #+#    #+# #+#   #+#  #+#        #+#    #+#                    
    ###     ###    ### ###     ###  ########  ###    ### ########## ###    ###                     
    
    `);

//Start Prompt
function start() {
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all Roles",
        "View all Departments",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.start) {
        case "View all Employees":
          viewAllEes();
          break;
        case "View all Roles":
          viewAllRl();
          break;
        case "View all Departments":
          viewAllDept();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        default:
      }
    });
}

//View All Functions

function viewAllEes() {
  connection.query("SELECT * FROM employee", function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
      console.log(
        data[i].id +
          " | " +
          data[i].first_name +
          " " +
          data[i].last_name +
          " | "
      );
    }
    start();
  });
}

function viewAllRl() {
  connection.query("SELECT * FROM role", function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
      console.log(
        data[i].id +
          " | " +
          data[i].title +
          " | " +
          data[i].salary +
          " | " +
          data[i].department_id +
          " | "
      );
    }
    start();
  });
}

function viewAllDept() {
  connection.query("SELECT * from department", function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id + " | " + data[i].name + " | " + data[i].budget);
    }
    start();
  });
}

//Update Functions

function updateRole() {
    inquirer.prompt(UpdateEeRl).then(function(answer) {
        console.log(answer);
        start();
    })
}

//Start Prompt Reference Functions

function addEmployee() {
  inquirer.prompt(addEmployeeArr).then(function(answer) {
    console.log(answer);
    start();
  });
}

function addRole() {
  inquirer.prompt(addRoleArr).then(function (answer) {
    console.log(answer);
    start();
  });
}

function addDepartment() {
  inquirer.prompt(addDepartmentArr).then(function (answer) {
    console.log(answer);
    start();
  });
}

//Arrays
const addEmployeeArr = [
  {
    name: "addFirstName",
    type: "input",
    message: "Please add your employee's first name.",
  },
  {
    name: "addLastName",
    type: "input",
    message: "Please add you employee's last name.",
  },
  {
    name: "addRole",
    type: "list",
    message: "Please select your employee's role.",
    choices: ["A", "B"],
  },
  {
    name: "addManager",
    type: "list",
    message: "Please select your employee's manager.",
    choices: ["A", "B"],
  },
];

const addRoleArr = [
  {
    name: "addRole",
    type: "input",
    message: "Please add the title of the role.",
  },
  {
    name: "addSalary",
    type: "input",
    message: "Please enter the salary for this role.",
  },
  {
    name: "addDepartment",
    type: "list",
    message: "Please select the department this role falls under.",
    choices: ["A", "B"],
  },
];

const addDepartmentArr = [
  {
    name: "addDepartment",
    type: "input",
    message: "Please enter the name of the new department.",
  },
];

const UpdateEeRl = [
  {
    name: "updateRole",
    type: "list",
    message: "Which employee would you like to update?",
    choices: ["A", "B"],
  },
  {
    name: "newRole",
    type: "list",
    message: "Which new role does the employee have?",
    choices: ["A", "B"],
  },
];

//Callback Function
start();
