const prompt = require("./prompt");
var inquirer = require("inquirer");

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

function start(){
    inquirer
        .prompt(
            {
                name: "start",
                type: "list",
                message: "What would you like to do?",
                choices: ["View all Employees", "View all Roles", "View all Departments","Add Employee", "Add Role", "Add Department", "Update Employee Role"]
            }
        ).then(function(answer) {
            switch(answer.start) {
                case "View all Employees":
                   console.log("A");
                break;
                case "View all Roles":
                    console.log("B");
                 break;
                 case "View all Departments":
                    console.log("C");
                 break;
                 case "Add Employee":
                    console.log("D");
                 break;
                 case "Add Role":
                    console.log("E");
                 break;
                 case "Add Department":
                    console.log("F");
                 break;
                 case "Update Employee Role":
                    console.log("G");
                 break;
                 
            }
        })
}

start();