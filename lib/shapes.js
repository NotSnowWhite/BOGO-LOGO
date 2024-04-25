function circle(text, textColor, shapeColor, borderColor) {
    return `<circle cx="50" cy="50" r="40" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />`
}

function square(text, textColor, shapeColor, borderColor) {
    return `<circle cx="50" cy="50" r="40" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />`

}

function triangle(text, textColor, shapeColor, borderColor) {
    return `<circle cx="50" cy="50" r="40" stroke="${borderColor}" stroke-width="3" fill="${shapeColor}" />`

}

// read shape response and respond accordingly. if response from user was circle run case circle()
function generateShapes(response) {
    switch (response.shape) {
        case 'Circle':
            return circle(response.text, response.textColor, response.shapeColor);
        case 'Square':
            return square(response.text, response.textColor, response.shapeColor);
        case 'Triangle':
            return triangle(response.text, response.textColor, response.shapeColor);
        default:
            return 'Invalid.';
    }
}

module.exports = generateShapes