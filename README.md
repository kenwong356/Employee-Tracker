# EMPLOYEE TRACKER

## Description

The Employee Tracker is an application ran through the terminal that allows users to view, add, and modify a database consisting of Departments, Roles, and Employees. The application runs using mySql for the database and Inquirer for the interface in the user's terminal.

## Installation

To install the app and get it operable, first, the user must download the application's code from the github, navigate to the package.json in the application's folder, then open it up in their terminal. The user will need to have installed npm or a similar program to install the packages and dependencies in the package.json file, by running the command "npm i" or "npm install".

Once the dependencies are installed into a node_modules folder, the user will then be required to create a .env file with the following values:

MYSQL_USER= *Your username here*
MYSQL_PASSWORD= *your password here*
MYSQL_DATABASE=employee_db

Set these values equal to your MYSQL username, MYSQL password, and the database name, which is set by default: employee_db. If you do not have mysql installed and have not created a username or password, do so, then put them into the .env file.

Finally, the user needs to create the database, which can be done by navigating to the db folder, then selecting the schema.sql file. Log into your mysql account in a new terminal, then paste the code found in schema.sql into it.

From here the user can begin adding their own data into the database, or use the placeholder data found in seeds.sql to populate an example database. If you wish to add your own custom data, please review the seeds.sql file and schema.sql files as to the structure of your mysql additions.

## Usage

Once all package dependencies are installed, and the database is generate and populated with data, navigate into this application's folder, then run the index.js file in your terminal.

For a video of the application in use, please visit the following link!

[Example Video](https://drive.google.com/file/d/1hujIhC_bp8vftY0ob1bFbKs-MioO2lKC/view?usp=sharing)
