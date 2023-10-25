const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'What shape would you like your logo to be?',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'colorChoice',
        message: 'What is the color of your logo?'
    },

    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter three letters for your logo name/text.',
    },
    {
        type: 'input',
        name: 'colorChoice',
        message: 'What is the color of your text?'
    }
];

function start() {
    inquirer
        .prompt(questions)
        .then(fs.writeFile(/*filetowriteto, datawe'rewriting,*/() => {
            err ? console.log(err) : console.log('Success');
        }))
}

start();