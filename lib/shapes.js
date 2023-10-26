

class Shapes{
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shapes {
    render(){return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`}
}

class Circle extends Shapes {
    render(){
        console.log('hello');
    }
}

class Square extends Shapes { 
}

const triangleOne = new Triangle('blue', 'lol', 'red')
// console.log(triangleOne);

module.exports = {Triangle, Circle, Square}