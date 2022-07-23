var config = {};
// Bot Username
config.username = "BotUsername";
// Channels the bot goes in
config.channels = ['TheTwitchChannels'];

// Twitch Application - Client ID: https://dev.twitch.tv/console
config.clientid = "twitch-clientid";
// Twitch Application - Client Secret: https://dev.twitch.tv/console
config.clientsecret = "twitch-clientsecret";

// Code - Log into the bot, and go to this URL: https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=CLIENTID&client_secret=CLIENTSECRET&scope=chat%3Aread+chat%3Aedit&state=c3ab8aa609ea11e793ae92361f002671&redirect_uri=http://localhost:3000
config.code = "twitch-code";

// Refresh Token  - run scripts/initial.js with the above inputs and copy it here
config.refreshtoken = "twitch-refreshtoken";
module.exports = { config };
