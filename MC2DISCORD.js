var mc = require('minecraft-protocol');
const Discord = require("discord.js")
const lexa = new Discord.Client()
// Discord Config
channelid = ("")
bottoken = ("")

// Minecraft Config
serverip = ("")
serverport = ("")
serverusername = ("")



lexa.on("ready", () => {console.log("MC2DISCORD Initialised")})

var client = mc.createClient({
  host: serverip,   
  port: serverport,        
  username: username,
});
client.on('chat', function(packet) {
  var jsonMsg = JSON.parse(packet.message);

  if(jsonMsg.translate == 'chat.type.announcement' || jsonMsg.translate == 'chat.type.text') {
    var username = jsonMsg.with[0].text;
    var msg = jsonMsg.with[1];
    if(username === client.username) return;
	lexa.channels.get(channelid).send(jsonMsg.with[0].text + " : " + jsonMsg.with[1])

  }
});
lexa.login(bottoken)
