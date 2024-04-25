const fs = require('fs');
const shapes = require('./lib/shapes');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'text',
        type: 'input',
        message: 'Write up to 3 characters to be displayed inside the logo:'
    },

    {
        name: 'text color',
        type: 'input',
        message: 'Input a text color for your logo:'
    },

    {
        name: 'shape',
        type: 'list',
        message: 'Pick a shape for your logo:',
        choices: ['Square', 'Circle', 'Triangle']
    },

    {
        name: 'shape color',
        type: 'input',
        message: 'Input a color for your logo:'
    },

])