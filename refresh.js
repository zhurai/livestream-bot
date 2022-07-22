var url="https://id.twitch.tv/oauth2/token";
var config = require('./config');
const { Easy } = require('node-libcurl');
const { Curl } = require('node-libcurl');


const { SendData } = {client_id: config.clientid,
client_secret: config.clientsecret,
grant_type: 'authorization_code',
code: config.code,
refresh_token: config.refreshtoken
}
