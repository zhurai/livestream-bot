var config = {};
config.username = "username";
config.password = "password";
config.channels = ['channel'];

config.opts = {
    identity: {
      username: this.username(),
      password: this.password()
    },
    channels: this.channels()
};

module.exports = config;