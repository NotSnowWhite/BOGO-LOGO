const fs = require('fs');
const inquirer = require('inquirer');
const {generateShapes} = require('./lib/shapes');

function writeToFile(filename, response) {
    fs.writeFile(`logos/${filename}.svg`, response, (err) => {
        err ? console.error(err) : console.log('Your logo was successfully generated! Check it out.');
    })

}

// prompts user for data
function init() {
    inquirer.prompt([
        {
            name: 'text',
            type: 'input',
            message: 'Write up to 3 characters to be displayed inside the logo:',
            validate: function (input) {
                if (input.length <= 3) {
                    return true;

                } else { 
                    return '3 char max';

                }
            }
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
            writeToFile(`logo_${Date.now()}`, generateShapes(response));
        });

}
init()
