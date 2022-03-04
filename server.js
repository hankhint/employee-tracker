//required packages
import mysql2 from 'mysql2';
import inquirer from 'inquirer';
import contable from 'console.table';

//dotenv keeps my sql credentials off github and therefore keeps them confidential
import dotenv from 'dotenv';
dotenv.config();

//node -r dotenv

//function to start mysql2 server
const connection = createConnection({
    host: 'localhost',
    //mysql username
    user: 'root',

//port
    port: '3306',
    //env holding my password
    password: process.env.SECRET_KEY,
    //database name
    database: 'employeeDatabase'
});

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
})