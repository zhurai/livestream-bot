const tmi = require('tmi.js');
const config = require('./config');
const refresh = require('./refresh');
const cmds = require('./cmd/index.js')

// Get Data
refresh.refresh_access_tokens().then(function(values){
  opts=options(values[0])
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
      username: config.config.username,
      password: 'oauth:'+access_token,
    },
    channels: config.config.channels
  };
  return opts
}

// Creates and returns the tmi.js client
function tmi_client(opts){
  var client = new tmi.Client(opts);
  client.on('message', onMessageHandler);
  client.on('connected', onConnectedHandler);
  return client;
}

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = cmds.dice.dice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Called when connected
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
