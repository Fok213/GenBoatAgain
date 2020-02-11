const Discord = require('discord.js');
const client = new Discord.Client();

const Token = 'Njc2Njg4MjcxNzIzNDYyNzA2.XkJVHw.fW7B56fqAKj-rAnOnWW6a9wkbRw';

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.login(Token);