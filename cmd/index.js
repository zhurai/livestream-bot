const config = require('../config');
const eightball = require ('./8ball')
const arknightsroguelike = require ('./arknightsroguelike')
const bilibili = require ('./bilibili')
const cmd = require ('./cmd')
const dice = require ('./dice')
const discord = require ('./discord')
const osureq = require ('./osureq')
const pronouns = require ('./pronouns')
const schedule = require ('./schedule')
const socials = require ('./socials')
const twitter = require ('./twitter')
const youtube = require ('./youtube')

function onMessageHandler (client, channel, tags, message, self){
    // ignore messages from the bot
    if (self) { return; }
    // ignore messages that aren't a command
    if (!message.startsWith(config.trigger)) { return; }
    
    // organize data
    var msgArray = message.trim().split(' ');
    var command = msgArray[0].substring(1);
    console.log("New Message:" + message)

    switch (command){
        case "8ball":
            break;
        case "akrl": // arknights roguelike commands
            break;
        case "bilibili":
            break;
        case "cmd":
            break;
        case "dice":
            dice.dice(client,channel,tags,message);
            break;
        case "discord":
            break;
        case "osureq":
            break;
        case "pronouns":
            break;
        case "schedule":
            break;
        case "socials":
            break;
        case "twitter":
            break;
        case "youtube":
            break;
        default:
            console.log("Unknown Command: " + msgArray[0])
            break;
    }
    
    
}


module.exports = { onMessageHandler }
