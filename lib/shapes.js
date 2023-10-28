// Shapes class takes in parameters and sets the following attributes from the user in index.js
class Shapes {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

// Triangle class takes those attributes from Shape and plugs in attributes in the return method.
class Triangle extends Shapes {
    render() {
        return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 150,200 300,0" class="triangle" fill="${this.color}" />
    <text font-family = "impact" font-weight="bold" x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

// Circle class takes those attributes from Shape and plugs in attributes in the return method.
class Circle extends Shapes {
    render() {
        return`
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${this.color}"/>
    <text font-family = "impact" font-weight="bold" x="150" y="135" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

// Square class takes those attributes from Shape and plugs in attributes in the return method.
class Square extends Shapes {
    render() {
        return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="5" width="200" height="200" fill="${this.color}" />
    <text font-family = "impact" font-weight="bold" x="150" y="135" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

// Exports the three different extended shapes classes, which will be required in index.js for user input to be passed through
module.exports = { Triangle, Circle, Square }