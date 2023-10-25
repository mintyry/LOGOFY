class Shapes{
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shapes {
}

class Circle extends Shapes {
}

class Square extends Shapes { 
}

const triangleOne = new Triangle('blue', 'lol', 'red')
console.log(triangleOne);