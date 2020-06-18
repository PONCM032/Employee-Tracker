var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "ee_tracker_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    //start function
  });

//employees roles departmens
    //make some tables
        //employees (most difficult table)
            //id
            //first name
            //last name
            //titles
                //join employees table to role table by id 
                    //join role which gets  - left join, not inner join
            //departments
            //salaries
            //managers
                //link manager by id - join back to employee table which will mark data there
        //roles
            //id 
                //to match up to department (foreign key)
            //title
                //direct call from this table
            //salary
                    //direct call from this table
        //departments
            //names
            //utilized budget
                //adding up all employees salaries in the employees table per department

// views
    //view all
        //has
            //first name
            //last name
            //join role which gets your title department salary
            //manager column will be an id that join to the employee tbale, not inner joing
        //by department
            //has
                //first name
                //last name
                //title
        //manager
            //pick an employee and see their direct reports
                //matching the selected employees id to all the employees where the manager id matches the selcted id


//inserts
        //department
            //just a name
        //role
            //name
            //salary
            //pick a department (related by id to department table
        //employee
            //first name
            //last name
            //pick a role (related by ifd to the the roles table)
            //pick a manager (related to id to the employees tbale, can be null)


//updates
    //employee role
        //update role id, which will change role, which in turn have a department and salary added to it
    //employee manager
        //change their manager id

//WHERE TO START
    //departments!
        //just have a name
    //roles
        //must have names, salary, and foreign key relating it to deparmtnets
    //employees
        //last one, most complocated
        //first.last name, role, manager id

//removing department and roles should also delete the employees associated with those


