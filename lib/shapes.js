function circle(text, textColor, shapeColor, borderColor) {
    return `<svg height= "350" width="auto" xmlns="http://www.w3.org/2000/svg" > 
    <circle cx="120" cy="120" r="100" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />
    <text font-size="40" x="90" y="125" font-weight="bold" fill="${textColor}">${text}</text>
    </svg>`
}

function square(text, textColor, shapeColor, borderColor) {
    return `<svg height= "350" width="auto" xmlns="http://www.w3.org/2000/svg" > 
    <rect x="30" y="30" width="200" height="200" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />
    <text font-size="50" x="95" y="135" font-weight="bold" fill="${textColor}">${text}</text>
    </svg>`

}

function triangle(text, textColor, shapeColor, borderColor) {
    return `<svg height= "350" width="auto" xmlns="http://www.w3.org/2000/svg" > 
    <polygon points="130,20 240,220 20,220" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />
    <text font-size="50" x="95" y="160" font-weight="bold" fill="${textColor}">${text}</text>
    </svg>`
}

// read shape response and respond accordingly. if response from user was circle run case circle()
function generateShapes(response) {
    switch (response.shape) {
        case 'Circle':
            return circle(response.text, response.textColor, response.shapeColor, response.borderColor);
        case 'Square':
            return square(response.text, response.textColor, response.shapeColor, response.borderColor);
        case 'Triangle':
            return triangle(response.text, response.textColor, response.shapeColor, response.borderColor);
        default:
            return 'Invalid.';
    }
}

module.exports = generateShapes