// Function called when the "dice" command is issued
function dice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

module.exports = dice();
