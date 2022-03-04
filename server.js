//required packages
import mysql2 from "mysql2";
import inquirer from "inquirer";
import contable from "console.table";

//dotenv keeps my sql credentials off github and therefore keeps them confidential
import dotenv from "dotenv";
dotenv.config();

//node -r dotenv

//function to start mysql2 server
const connection = mysql2.createConnection({
  host: "localhost",
  //mysql username
  user: "root",
  //port
  port: "3306",
  //env holding my password
  password: process.env.SECRET_KEY,
  //database name
  database: "employeeDatabase",
});

//function to connect to database
connection.connect((err) => {
  if (err) {
    //returns error if it fails to connect
    console.log(err);
    //breaks out of this function and does not get to the message below
    return;
  }
  console.log(`Welcome to the employee database. ID: ${connection.threadId}`);
});
//this function is called at the end of the file
//inquirer prompts stored here
//menu selections direct to control statements for the selected feature
const startTrackerPrompts = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuChoices",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View employees by department",
          "View employees by manager",
          "View all departments",
          "View department budgets",
          "View all roles",
          "Add employee",
          "Add department",
          "Add role",
          "Delete employee",
          "Delete role",
          "Update employee role",
          "Update manager of employee",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      //destructure inputs from user
      const { menuChoices } = answers;

      //control statements for each menu option

      if (menuChoices === "View all employees") {
        displayEmployees();
      }
      if (menuChoices === "View employees by department") {
        displayEmployeesByDepartment();
      }
      if (menuChoices === "View employees by manager") {
        displayEmployeesByManager();
      }
      if (menuChoices === "View all departments") {
        displayAllDepartments();
      }
      if (menuChoices === "View department budgets") {
        displayDepartmentBudgets();
      }
      if (menuChoices === "View all roles") {
        displayAllRoles();
      }
      if (menuChoices === "Add employee") {
        addEmployee();
      }
      if (menuChoices === "Add department") {
        addDepartment();
      }
      if (menuChoices === "Add role") {
        addRole();
      }
      if (menuChoices === "Delete employee") {
        deleteEmployee();
      }
      if (menuChoices === "Delete role") {
        deleteRole();
      }
      if (menuChoices === "Update employee role") {
        updateEmployeeRole();
      }
      if (menuChoices === "Update manager role") {
        updateManagerRole();
      }
      if (menuChoices === "Update manager of employee") {
        updateManagerOfEmployee();
      }
      if (menuChoices === "Exit") {
        connection.end();
      }
    });
};

//displays all employees
// router.get('/candidates', (req, res) => {
//   const sql = `SELECT candidates.*, parties.name
//                 AS party_name
//                 FROM candidates
//                 LEFT JOIN parties
//                 ON candidates.party_id = parties.id`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });
const displayEmployees = () => {
  console.log("Displaying all employees...");
  //set employeeRead to a variable with a literal that is an sql query
  const employeeRead = `SELECT employee.id,
  employee.first_name,
  employee.last_name,
  roles.title,
  department.departmentName AS department,
  roles.salary,
  CONCAT (manager.first_name, " ", manager.last_name) AS manager
  FROM employee
  LEFT JOIN roles ON employee.role_id = roles.id
  LEFT JOIN department ON roles.department_id = department.id
  LEFT JOIN employee manager ON employee.manager_id = manager.id`;
  //promise that display output from db query
  connection
    .promise()
    .query(employeeRead)
    .then(([rows]) => {
      let employee = rows;
      console.table("Employees", employee);
    })
    .catch((err) => console.log(err));

  startTrackerPrompts();
};

// if (menuChoices === "View employees by department") {
//   displayEmployeesByDepartment();
// }
// if (menuChoices === "View employees by manager") {
//   displayEmployeesByManager();
// }
// if (menuChoices === "View all departments") {
//   displayAllDepartments();
// }
// if (menuChoices === "View department budgets") {
//   displayDepartmentBudgets();
// }
// if (menuChoices === "View all roles") {
//   displayAllRoles();
// }
// if (menuChoices === "Add employee") {
//   addEmployee();
// }
// if (menuChoices === "Add department") {
//   addDepartment();
// }
// if (menuChoices === "Add role") {
//   addRole();
// }
// if (menuChoices === "Delete employee") {
//   deleteEmployee();
// }
// if (menuChoices === "Delete role") {
//   deleteRole();
// }
// if (menuChoices === "Update employee role") {
//   updateEmployeeRole();
// }
// if (menuChoices === "Update manager role") {
//   updateManagerRole();
// }
// if (menuChoices === "Update manager of employee") {
//   updateManagerOfEmployee();
// }
// if (menuChoices === "Exit") {
//   connection.end();

//function call to start employee tracker prompts
startTrackerPrompts();
