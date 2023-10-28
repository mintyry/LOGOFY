// requiring necessary modules and shapes classes to access template of shapes to render from user's answers
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js')

// validate function to check that user's logo text input is not longer than three characters
const validateAnswer = (answer) => {
    return answer.length > 3 ? "Logo cannot be more than 3 characters long." : true;
  };

// validate color input using regex -- checks that it is either a string of letters or a hexadecimal number
const validateColor = (userColor) => {
    const colorRegex = /^([a-zA-Z]+|\#[0-9A-Fa-f]{6})$/;
    if(colorRegex.test(userColor)) {
        return true;
    } else {
        return 'Please enter a valid color.';
    } 
}

// quetions that prompts user's answers to generate logo
const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter three text characters for your logo name.',
        validate: (answer) => validateAnswer(answer)
    },
    {
        type: 'input',
        name: 'textColorChoice',
        message: 'What is the color of your text?',
        validate: (userColor) => validateColor(userColor)
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'What shape would you like your logo to be?',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'colorChoice',
        message: 'What is the color of your logo?',
        validate: (userColor) => validateColor(userColor)
    }
];

// function that holds what will happen once app starts
function start() {
    inquirer
        // prompt will proceed with the above questions
        .prompt(questions)
        .then(function (data) {
            // depending on the shape user chooses, the rest of choices will be subsequently passed through to render the logo.
            let finalSVG = '';
         
            if (data.shapeChoice === 'Triangle') {

                const userTriangle = new Triangle(data.logoName, data.textColorChoice, data.colorChoice);
                finalSVG = userTriangle.render();

            } else if (data.shapeChoice === 'Circle') {
       
                const userCircle = new Circle(data.logoName, data.textColorChoice, data.colorChoice);
                finalSVG = userCircle.render();

            } else if (data.shapeChoice === 'Square') {
           
                const userSquare = new Square(data.logoName, data.textColorChoice, data.colorChoice);
                finalSVG = userSquare.render();

            }

            // we write whatever finalSVG becomes into the logo.svg file; if successful,
            // generated logo.svg message will display in command line.
            fs.writeFile('./dist/logo.svg', finalSVG, (err) => {
                err ? console.log(err) : console.log('Generated logo.svg');
            })
        })
}

// call function to start when user invokes app
start();