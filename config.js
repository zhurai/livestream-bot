var jsonfile = require('./config.json');

var config = {};
// Bot Username
config.username = jsonfile.username;
// Channels the bot goes in
config.channels = jsonfile.channels;

// Twitch Application - Client ID: https://dev.twitch.tv/console
config.clientid = jsonfile.twitchClientId;
// Twitch Application - Client Secret: https://dev.twitch.tv/console
config.clientsecret = jsonfile.twitchClientSecret;

// Code - Log into the bot, and go to this URL: https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=CLIENTID&client_secret=CLIENTSECRET&scope=chat%3Aread+chat%3Aedit&state=c3ab8aa609ea11e793ae92361f002671&redirect_uri=http://localhost:3000
config.code = jsonfile.twitchUserCode;

// Refresh Token  - run scripts/initial.js with the above inputs and copy it here
config.refreshtoken = jsonfile.twitchRefreshToken;

module.exports = { config };
