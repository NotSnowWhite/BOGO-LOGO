function circle(text, textColor, shapeColor, borderColor) {
    return `<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <circle cx="100" cy="100" r="98" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />
    <text font-size="40" x="70" y="110" font-weight="bold" fill="${textColor}">${text}</text>
    </svg>`
}

function square(text, textColor, shapeColor, borderColor) {
    return `<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <rect x="30" y="30" width="180" height="180" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />
    <text font-size="50" x="85" y="110" font-weight="bold" fill="${textColor}">${text}</text>
    </svg>`

}

function triangle(text, textColor, shapeColor, borderColor) {
    return `<svg height= "200" width="300" xmlns="http://www.w3.org/2000/svg" > 
    <polygon points="130,10 240,190 20,190" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />
    <text font-size="50" x="95" y="140" font-weight="bold" fill="${textColor}">${text}</text>
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

module.exports = {generateShapes, circle, square, triangle}
