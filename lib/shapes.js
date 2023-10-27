

class Shapes {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shapes {
    render() {
        return `
    <svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="300,300  0,300 150,0" class="triangle" fill="${this.color}" />
    <text font-family = "impact" font-weight="bold" x="150" y="220" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

class Circle extends Shapes {
    render() {
        return`
    <svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="100" fill="${this.color}"/>
    <text font-family = "impact" font-weight="bold" x="150" y="190" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

class Square extends Shapes {
    render() {
        return `
    <svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
    <text font-family = "impact" font-weight="bold" x="150" y="190" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

// const triangleOne = new Triangle('blue', 'lol', 'red')
// console.log(triangleOne);

module.exports = { Triangle, Circle, Square }