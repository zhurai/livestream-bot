const tmi = require('tmi.js');
const config = require('./config');
const refresh = require('./refresh');
const cmds = require('./cmd/index.js')

// Get Data
refresh.refresh_access_tokens().then(function(values){
  opts=options(values[0])
  config.updateConfig(values[0],values[1])
  const client = tmi_client(opts);
  client.connect();
})
.catch(error => {
  console.error(error.message);
  process.exit(1)
});

// Creates the Payload for the tmi.js client
function options(access_token){
  opts = {
    identity: {
      username: config.username,
      password: 'oauth:'+access_token,
    },
    channels: config.channels
  };
  return opts
}

// Creates and returns the tmi.js client
function tmi_client(opts){
  var client = new tmi.Client(opts);
  client.on('message', cmds.onMessageHandler(client,channel, tags, message,self));
  client.on('connected', onConnectedHandler);
  return client;
}

// Called when connected
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
