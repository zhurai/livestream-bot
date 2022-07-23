var url="https://id.twitch.tv/oauth2/token";
var config = require('../config');
const https  = require('node:https');

const data = "client_id="+config.config.clientid+"&client_secret="+config.config.clientsecret+"&grant_type=authorization_code&redirect_uri=http://localhost:3000&code="+config.config.code;

const options = {
  port: 443,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

const accesstoken="";
  
const req = https.request(url,options, (res) => {
    res.setEncoding('utf8');
    res.on('data', d => {
    if (res.statusCode == 200){
        response = JSON.parse(d);
        console.log("access_token: " + response.access_token);
        console.log("refresh_token: " + response.refresh_token);
    }
    else {
        process.exit(1);
    }
    });
    res.on('error', error => {
    console.error(error);
    process.exit(1)
    });
})
    
req.on('error', error => {
    console.error(error);
    process.exit(1)
  });

req.write(data);
req.end();
    

