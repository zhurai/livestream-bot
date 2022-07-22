const tmi = require('tmi.js');
const config = require('./config');

// Create a client with our options
const client = new tmi.client(config.opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } 
  else if (commandName === '!discord'){
    const discordlink=discord()
    client.say(target, `zhurai's Discord Link is ${discordlink}`);
    console.log(`* Executed ${commandName} command`);
  }
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

