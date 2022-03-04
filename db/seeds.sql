
--seeds for roles
INSERT INTO department (name)
VALUES
    ('Administration'),
    ('Marketing'),
    ('Legal'),
    ('Backend Engineering'),
    ('Frontend Engineering'),
    ('DevOps'),
    ('Human Resources'),
    ('Accounting');
--seeds for roles
INSERT INTO roles (department_id, title, salary)
VALUES 
    (1, 'Manager', 99999),
    (2, 'Secretary', 22222),
    (3, 'Lawyer', 66666),
    (4, 'Backend Engineer', 77777),
    (5, 'Frontend Engineer', 55555),
    (6, 'SysAdmin', 88888),
    (7, 'Taking Care of People', 54321),
    (8, 'Accountant', 64128);
-- seeds for employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Boss', 'Babe', 1, 1),
    ('Robert', 'Smith', 2, null),
    ('Patty', 'Blank', 3, null),
    ('Cal', 'Sith', 4, null),
    ('Tom', 'Anderson', 5, null),
    ('George', 'Robertson', 6, null),
    ('Bernice', 'York', 7, null),
    ('Francis', 'Diaz', 8, null);