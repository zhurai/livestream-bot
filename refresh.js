var url="https://id.twitch.tv/oauth2/token";
var config = require('./config');
const https  = require('node:https');

async function refresh_access_tokens(){
  const access_token = "";
  const refresh_token = "";
  const data = "client_id="+config.clientid+"&client_secret="+config.clientsecret+"&grant_type=refresh_token&refresh_token="+config.refreshtoken;
  const options = {
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };
  
  const req = https.request(url,options, (res) => {
    res.setEncoding('utf8');
    res.on('data', d => {
      if (res.statusCode == 200){
        response = JSON.parse(d);
        accesstoken = response.access_token;
      }
      else {
        console.error("Incorrect HTTP Status Code:"+ res.statusCode);
        process.exit(1);
      }
    })});
  req.on('error',error => {
    console.error(error);
    process.exit(1)
  })
  req.write(data);
  req.end();
  
  return Promise.resolve([access_token,refresh_token])
}

module.exports = { refresh_access_tokens }

