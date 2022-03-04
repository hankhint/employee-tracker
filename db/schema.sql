-- employeeDatabase
--deletes database if it exists
DROP DATABASE IF EXISTS employeeDatabase;
CREATE DATABASE employeeDatabase;
--assigns mysql to use this database
USE employeeDatabase;


--create table for department
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY;
    name VARCHAR(60) NOT NULL
)

--create table for roles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(60) NOT NULL,
    salary DECIMAL(8,2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);
