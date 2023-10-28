const { Triangle, Circle, Square } = require('./shapes.js')

describe('testing shapes render',() =>{
    it('should create triangle', () => {
        //test specific mock cases
        const userTriangle = new Triangle('LOL', 'red', 'blue');
        const expectedTriangle = `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 150,200 300,0" class="triangle" fill="blue" />
    <text font-family = "impact" font-weight="bold" x="150" y="100" font-size="60" text-anchor="middle" fill="red">LOL</text>
    </svg>
    `
        expect(userTriangle.render()).toEqual(expectedTriangle);
    })

    it('should create circle', () => {
        const userCircle = new Circle('ZEO', 'white', 'pink');
        const expectedCircle = `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="pink"/>
    <text font-family = "impact" font-weight="bold" x="150" y="135" font-size="90" text-anchor="middle" fill="white">ZEO</text>
    </svg>
    `
        expect(userCircle.render()).toEqual(expectedCircle);
    })

    it('should create square', () => {
        const userSquare = new Square('Bob', 'brown', 'yellow');
        const expectedSquare = `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="5" width="200" height="200" fill="yellow" />
    <text font-family = "impact" font-weight="bold" x="150" y="135" font-size="80" text-anchor="middle" fill="brown">Bob</text>
    </svg>
    `
        expect(userSquare.render()).toEqual(expectedSquare);
    })
})
