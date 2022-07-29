const fs = require('fs')
const jsonfile = './config.json';

var jsonobj = JSON.parse(fs.readFileSync(jsonfile, (err) => {
    if (err) {
        console.error("config.json does not exist, please make config.json");
        throw err;
    }
}));

function updateConfig (access_token,refresh_token)
{
    jsonobj.twitchAccessToken = access_token
    jsonobj.twitchRefreshToken = refresh_token
    var jsondata = JSON.stringify(jsonobj, undefined, 4)
    fs.writeFileSync(jsonfile,jsondata,(err) => {
        if (err) throw err;
    })
}

module.exports = { 
    // Bot Username
    username: jsonobj.username,
    // Channels the bot goes in
    channels: jsonobj.channels,
    
    // Bot Command Trigger
    trigger: jsonobj.trigger,

    // Twitch Application - Client ID: https://dev.twitch.tv/console
    clientid: jsonobj.twitchClientId,
    // Twitch Application - Client Secret: https://dev.twitch.tv/console
    clientsecret: jsonobj.twitchClientSecret,

    // Code - Log into the bot, and go to this URL: 
    // https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=CLIENTID&client_secret=CLIENTSECRET&scope=chat%3Aread+chat%3Aedit&state=c3ab8aa609ea11e793ae92361f002671&redirect_uri=http://localhost:3000
    // scope needs to be changed if you wish to access more of the twitch api as the user.
    code: jsonobj.twitchUserCode,

    // Access Token - leave this empty or with default values (do not edit)
    accesstoken: jsonobj.twitchAccessToken,
    
    // Refresh Token - leave this empty or with default values (do not edit)
    refreshtoken: jsonobj.twitchRefreshToken,
    
    // updateConfig function
    updateConfig
};
