var config = {};
config.username = "username";
config.password = "password"; // OAuth token / etc
config.channels = ['channel'];
config.refreshtoken = "twitch-refreshtoken";
config.clientid = "twitch-clientid";
config.clientsecret = "twitch-clientsecret";
config.code = "twitch-code";
config.opts = {
    identity: {
      username: config.username,
      password: config.password
    },
    channels: config.channels
};

module.exports = config;
