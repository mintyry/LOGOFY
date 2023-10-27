const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js')

const validateAnswer = (answer) => {
    return answer.length > 3 ? "Please submit text no more than 3 characters long." : true;
  };

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
        message: 'Please enter three text characters for your logo name.',
        validate: (answer) => validateAnswer(answer)
    },
    {
        type: 'input',
        name: 'textColorChoice',
        message: 'What is the color of your text?'
    }
];

function start() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            let finalSVG = '';
            console.log(data)
            if (data.shapeChoice === 'Triangle') {
                console.log(Triangle);
                //why is this logging the class in an array? Is it bc that's what the user's answer translates to in inquirer?
                const userTriangle = new Triangle(data.colorChoice, data.logoName, data.textColorChoice);
                console.log(userTriangle.render());
                finalSVG = userTriangle.render();

            } else if (data.shapeChoice === 'Circle') {
                console.log(Circle);
                //why is this logging as an array of the class?
                const userCircle = new Circle(data.colorChoice, data.logoName, data.textColorChoice);
                console.log(userCircle.render());
                finalSVG = userCircle.render();

            } else if (data.shapeChoice === 'Square') {
                console.log(Square);
                //why is this logging as an array of the class?
                const userSquare = new Square(data.colorChoice, data.logoName, data.textColorChoice);
                console.log(userSquare.render());
                finalSVG = userSquare.render();

            }
            fs.writeFile('./dist/logo.svg', finalSVG, (err) => {
                err ? console.log(err) : console.log('Generated logo.svg');
            })
        })
}

start();