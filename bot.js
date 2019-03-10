const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if ( message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.NTU0MjQ0NTc4ODYxOTA3OTcx.D2aBvg.4yLq8wbXO3v4hxfcLVxmug28Cy8);
