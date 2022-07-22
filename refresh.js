var url="https://id.twitch.tv/oauth2/token";
var config = require('./config');
const { curly } = require('node-libcurl');

const { data } = await curly.post(url, {
  postFields: JSON.stringify(
    { 
        client_id: config.clientid,
        client_secret: config.clientsecret,
        grant_type: 'authorization_code',
        code: config.code,
        refresh_token: config.refreshtoken,
        redirect_uri: "http://localhost:3000"
    }),
  httpHeader: [
    'Content-Type: application/x-www-form-urlencoded',
  ],
})

console.log(data);
