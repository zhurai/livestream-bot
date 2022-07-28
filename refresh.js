var url="https://id.twitch.tv/oauth2/token";
const config = require('./config');
const https  = require('node:https');

function refresh_access_tokens(){
  return new Promise(function(resolve, reject){
    var access_token = "";
    var refresh_token = "";
    var response = "";
    const data = "client_id="+config.config.clientid+"&client_secret="+config.config.clientsecret+"&grant_type=refresh_token&refresh_token="+config.config.refreshtoken;
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
        if (res.statusCode != 200){
          console.error("Incorrect HTTP Status Code:"+ res.statusCode);
          console.error(d);
          return reject(new Error("statuscode= "+ res.statusCode));
        }
        else{
          response = JSON.parse(d);
        }
      })
      res.on('end',function(){
        access_token = response.access_token;
        refresh_token = response.refresh_token;
        resolve([access_token,refresh_token])
      })
    
    });
      req.write(data);
      req.end();
  })
}

module.exports = { refresh_access_tokens }

