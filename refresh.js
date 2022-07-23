var url="https://id.twitch.tv/oauth2/token";
var config = require('./config');
const https  = require('node:https');
const { resolve } = require('node:path');


const data = "client_id="+config.clientid+"&client_secret="+config.clientsecret+"&grant_type=refresh_token&refresh_token="+config.refreshtoken;
const options = {
  port: 443,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

async function get_accesstoken()
{
  const access_token = await generate_accesstoken()
}

function generate_accesstoken ()
{
  const req = https.request(url,options, (res) => {
  res.setEncoding('utf8');
  res.on('data', d => {
  if (res.statusCode == 200){
    response = JSON.parse(d);
    const accesstoken = response.access_token;
    return new Promise(resolve => {
    setTimeout(() => {
      resolve(accesstoken);
    },2000);
    });
  }
  else{
    process.exit(1)
  }});
  });

  req.on('error', error => {
    console.error(error);
    process.exit(1)  
  });

  req.write(data);
  req.end();

}

module.exports = { get_accesstoken }

