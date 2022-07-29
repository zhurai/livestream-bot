const config = require('../config');

function onMessageHandler (client, channel, tags, message, self){
    // ignore messages from the bot
    if (self) { return; }
    // ignore messages that aren't a command
    if (!message.startsWith("!")) { return; }
    
    // organize data
    const msgArray = msg.trim().split(' ');
    console.log(message)
    
    if (msgArray[0] == "!dice")
    {
        const num = 1
        client.say(channel, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    }
    
}

// imports all other commands
const dice = require('./dice.js')

module.exports = { onMessageHandler, dice }
