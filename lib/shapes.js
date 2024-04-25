function generateShapes(border, color) {
    return `<circle cx="50" cy="50" r="40" stroke="${border}" stroke-width="3" fill="${color}" />`
}

module.exports = generateShapes