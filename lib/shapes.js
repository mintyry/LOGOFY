class Shapes {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

class Triangle extends Shapes {
    render() {
        return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 150,200 300,0" class="triangle" fill="${this.color}" />
    <text font-family = "impact" font-weight="bold" x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

class Circle extends Shapes {
    render() {
        return`
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${this.color}"/>
    <text font-family = "impact" font-weight="bold" x="150" y="135" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

class Square extends Shapes {
    render() {
        return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="5" width="200" height="200" fill="${this.color}" />
    <text font-family = "impact" font-weight="bold" x="150" y="135" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `}
}

// const triangleOne = new Triangle('blue', 'lol', 'red')
// console.log(triangleOne);

module.exports = { Triangle, Circle, Square }