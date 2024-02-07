const inquirer = require('inquirer');
const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    employee_track();
});

var employee_track = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Department', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Log Out']
    }]).then((answers) => {
        if (answers.prompt === 'View All Department') {
            db.query(`SELECT * FROM departments`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Departments: ");
                console.table(result);
                employee_track();
            });
        } else if (answers.prompt === 'View All Roles') {
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Roles: ");
                console.table(result);
                employee_track();
            });
        } else if (answers.prompt === 'View All Employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Employees: ");
                console.table(result);
                employee_track();
            });
        } else if (answers.prompt === 'Add A Department') {
            inquirer.prompt([{
                type: 'input',
                name: 'department',
                message: 'What is the name of the department?',
                validate: departmentInput => {
                    if (departmentInput) {
                        return true;
                    } else {
                        console.log('Please Add A Department!');
                        return false;
                    }
                }
            }]).then((answers) => {
                db.query(`INSERT INTO departments (department_name) VALUES (?)`, [answers.department], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.department} to the database.`)
                    employee_track();
                });
            });
        } else if (answers.prompt === 'Add A Role') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of the role?',
                    validate: titleInput => {
                        if (titleInput) {
                            return true;
                        } else {
                            console.log('Please Enter A Title!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary of the role?',
                    validate: salaryInput => {
                        if (salaryInput) {
                            return true;
                        } else {
                            console.log('Please Enter A Salary!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'What is the department ID of the role?',
                    validate: departmentIdInput => {
                        if (departmentIdInput) {
                            return true;
                        } else {
                            console.log('Please Enter A Department ID!');
                            return false;
                        }
                    }
                }
            ]).then((answers) => {
                db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [answers.title, answers.salary, answers.department_id], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.title} to the database.`)
                    employee_track();
                });
            });
        } else if (answers.prompt === 'Add An Employee')  { 
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: "What is the employee's first name?",
                    validate: firstNameInput => {
                        if (firstNameInput) {
                            return true;
                        } else {
                            console.log("Please Enter The Employee's First Name!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: "What is the employee's last name?",
                    validate: lastNameInput => {
                        if (lastNameInput) {
                            return true;
                        } else {
                            console.log("Please Enter The Employee's Last Name!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: "What is the employee's role ID?",
                    validate: roleIdInput => {
                        if (roleIdInput) {
                            return true;
                        } else {
                            console.log("Please Enter The Employee's Role ID!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: "What is the employee's manager ID?",
                    validate: managerIdInput => {
                        if (managerIdInput) {
                            return true;
                        } else {
                            console.log("Please Enter The Employee's Manager ID!");
                            return false;
                        }
                    }
                }
            ]).then((answers) => {
                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answers.first_name, answers.last_name, answers.role_id, answers.manager_id], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.first_name} ${answers.last_name} to the database.`)
                    employee_track();
                });
            });
        } else if (answers.prompt === 'Log Out') {
            db.end();
            console.log("Bye!");
        }
    })
};
