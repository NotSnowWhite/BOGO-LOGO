const { circle, square, triangle } = require('./shapes');

describe('Circle', () => {
    it('should create a circle with specified text and colors', () => {
        const result = circle('hi', 'red', 'blue', 'pink');
        expect(result).toEqual(`<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <circle cx="120" cy="120" r="100" stroke="pink" stroke-width="3" fill="blue" />
    <text font-size="40" x="90" y="125" font-weight="bold" fill="red">hi</text>
    </svg>`)
    });
});

describe('Square', () => {
    it('should create a square with specified text and colors', () => {
        const result = square('hi', 'red', 'blue', 'pink');
        expect(result).toEqual(
            `<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <rect x="30" y="30" width="200" height="200" stroke="pink" stroke-width="3" fill="blue" />
    <text font-size="50" x="95" y="135" font-weight="bold" fill="red">hi</text>
    </svg>`)
    });
});

describe('Triangle', () => {
    it('should create a triangle with specified text and colors', () => {
        const result = triangle('hi', 'red', 'blue', 'pink');
        expect(result).toEqual(`<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <polygon points="130,20 240,220 20,220" stroke="pink" stroke-width="3" fill="blue" />
    <text font-size="50" x="95" y="160" font-weight="bold" fill="red">hi</text>
    </svg>`)
    });
});