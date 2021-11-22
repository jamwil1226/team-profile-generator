const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

let manager = [];
let engineer = [];
let intern = [];
let teamInfo = {manager, engineer, intern};

function init() {    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'input',
            name: 'name',
            message: "What is the Employee's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                }
            }
        },
        {
            type:'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID!");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!");
                }
            }
        }])
        .then(({name, id, email, role}) => {
            if (role === "Manager") {
                return inquirer.prompt([
                    {
                        type:'input',
                        name: 'officeNumber',
                        message:"What is the Manager's office number?",
                        validate: officeNumber => {
                            if (officeNumber) {
                                return true;
                            } else {
                                console.log("Please enter the Manager's office number!");
                            }
                        }
                    },
                    {
                        type:'confirm',
                        name:'addEmployee',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({officeNumber, addEmployee}) => {
                        manager.push(new Manager(name, id, email, officeNumber))
                        if (addEmployee) {
                            return init();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the Engineer's GitHub username?",
                        validate: github => {
                            if (github) {
                                return true;
                            } else {
                                console.log("Please enter the Engineer's GitHub!");
                            }
                        }
                    },
                    {
                        type:'confirm',
                        name:'addEmployee',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({github, addEmployee}) => {
                        engineer.push(new Engineer(name, id, email, github))
                        if (addEmployee) {
                            return init();
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer.prompt([{
                        type:'input',
                        name:'school',
                        message: "What is the Intern's school?",
                        validate: school => {
                            if (school) {
                                return true;
                            } else {
                                console.log("Please enter the Intern's school!");
                            }
                        }
                    },
                    {
                        type:'confirm',
                        name:'addEmployee',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({school, addEmployee}) => {
                        intern.push(new Intern(name, id, email, school))
                        if (addEmployee) {
                            return init();
                        }
                    })
            }
        })
};

init()
    .then(employeeInfo => {
        return generateHTML(teamInfo)
    })
    .then(indexHTML => {
        return writeFile(indexHTML)
    })

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            return (err);
        } else {
            console.log('Team Profile Generated! Check index.html now!')
        }
    })    
}

