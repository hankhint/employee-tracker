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
        viewEmployees();
      }
      if (menuChoices === "View employees by department") {
        viewEmployeesByDepartment();
      }
      if (menuChoices === "View employees by manager") {
        viewEmployeesByManager();
      }
      if (menuChoices === "View all departments") {
        viewAllDepartments();
      }
      if (menuChoices === "View department budgets") {
        viewDepartmentBudgets();
      }
      if (menuChoices === "View all roles") {
        viewAllRoles();
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

//function call to start employee tracker prompts
startTrackerPrompts();
