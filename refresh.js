var url="https://id.twitch.tv/oauth2/token";
var config = require('./config');
const { curly } = require('node-libcurl');

const { data } = await curly.post(url, {
  postFields: JSON.stringify(
    { 
        grant_type: 'refresh_token',
        refresh_token: config.refreshtoken,
        client_id: config.clientid,
        client_secret: config.clientsecret
    }),
  httpHeader: [
    'Content-Type: application/x-www-form-urlencoded',
  ],
})

console.log(data);
