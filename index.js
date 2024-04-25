const fs = require('fs');
const shapes = require('./lib/shapes');
const inquirer = require('inquirer');

function writeToFile(filename, response) {
    fs.writeFile(`examples/${filename}.svg`, response, (err) => {
        err ? console.error(err) : console.log('Your logo was successfully created! Check it out.');
    })

}

// prompts user for data
function init() {
    inquirer.prompt([
        {
            name: 'text',
            type: 'input',
            message: 'Write up to 3 characters to be displayed inside the logo:'
        },

        {
            name: 'textColor',
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
            name: 'shapeColor',
            type: 'input',
            message: 'Input a color for your logo:'
        },
        {
            name: 'borderColor',
            type: 'input',
            message: 'Input a color for your logo\'s border:'
        },

    ])
    .then((response) => {
        writeToFile(`logo_${Date.now()}`, shapes(response));
    });

}
init()
