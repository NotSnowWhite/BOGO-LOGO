const { circle, square, triangle } = require('./shapes');

describe('Circle', () => {
    it('should create a circle with specified text and colors', () => {
        const result = circle('hi', 'red', 'blue', 'pink');
        expect(result).toEqual(`<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <circle cx="100" cy="100" r="98" stroke="pink" stroke-width="3" fill="blue" />
    <text font-size="40" x="70" y="110" font-weight="bold" fill="red">hi</text>
    </svg>`)
    });
});

describe('Square', () => {
    it('should create a square with specified text and colors', () => {
        const result = square('hi', 'red', 'blue', 'pink');
        expect(result).toEqual(
            `<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <rect x="30" y="30" width="180" height="180" stroke="pink" stroke-width="3" fill="blue" />
    <text font-size="50" x="85" y="110" font-weight="bold" fill="red">hi</text>
    </svg>`)
    });
});

describe('Triangle', () => {
    it('should create a triangle with specified text and colors', () => {
        const result = triangle('hi', 'red', 'blue', 'pink');
        expect(result).toEqual(`<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <polygon points="130,10 240,190 20,190" stroke="pink" stroke-width="3" fill="blue" />
    <text font-size="50" x="95" y="140" font-weight="bold" fill="red">hi</text>
    </svg>`)
    });
});