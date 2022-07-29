function dice (client,channel,tags,message) {
    const sides = 6;
    var diceRoll = Math.floor(Math.random() * sides) + 1;
    client.say(channel, "@${tags.username}, you rolled a " + diceRoll)
}

module.exports = { dice }
