var config = {};
config.username = "username";
config.password = "password";
config.channels = ['channel'];

config.opts = {
    identity: {
      username: config.username,
      password: config.password
    },
    channels: config.channels
};

module.exports = config;