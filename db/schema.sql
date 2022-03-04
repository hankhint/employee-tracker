-- employeeDatabase
--deletes database if it exists
DROP DATABASE IF EXISTS employeeDatabase;
CREATE DATABASE employeeDatabase;
--assigns mysql to use this database
USE employeeDatabase;


--create table for department
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(30) NOT NULL
);
--create table for roles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(60) NOT NULL,
    salary DECIMAL(8,2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

--create table for employees
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);