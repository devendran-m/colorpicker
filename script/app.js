// Utility functions
function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

function randomBgColor() {
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();
    return `rgb(${r}, ${g}, ${b})`;
}

function convertToHex(decimalValue) {
    const hexCharacters = "0123456789ABCDEF";
    let hexString = "";

    do {
        hexString = hexCharacters[decimalValue % 16] + hexString;
        decimalValue = Math.floor(decimalValue / 16);
    } while (decimalValue > 0);

    return hexString.padStart(2, '0');  // Ensure two characters
}

function rgbToHex(r, g, b) {
    return `#${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`;
}

function extractRGBValues(rgbString) {
    return rgbString.match(/\d+/g).map(Number);
}

// Main logic
document.getElementById("colorbutton").addEventListener('click', function() {
    const rgbColor = randomBgColor();
    const [r, g, b] = extractRGBValues(rgbColor);
    const hexaColor = rgbToHex(r, g, b);

    document.body.style.backgroundColor = rgbColor;
    document.getElementById("rgbColorCode").innerHTML = rgbColor;
    document.getElementById("hexColorCode").innerHTML = hexaColor;
});