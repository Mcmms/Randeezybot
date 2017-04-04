const commando = require('discord.js-commando');
const fs = require("fs");
let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
var LolApi = require('leagueapi');
const bot = new commando.Client({
  unknownCommandResponse: false,
  owner: '148488274061688832'
});

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setGame('RPG Sim ( ͡° ͜ʖ ͡° )');
  //console.log(bot.users.get('244618889483255809'));
});

bot.on('guildCreate', function (guild) {
  let rpgRoles = JSON.parse(fs.readFileSync('rpg_files/roles.json', 'utf8'));
  const guildData = bot.guilds.get(message.guild.id);
  const channel = bot.channels.get(member.guild.id);
  var titles = rpgRoles['Titles'];
  var Array = [];
  for (var i in titles) {
    Array.push({
      name: titles[i].name,
      color: titles[i].color,
      hoist: titles[i].hoist,
    });
  }
  //Add permissions here later
  for (var i = Array.length - 1; i >= 0; i--) {
    //console.log(Array[i]);
    guildData.createRole(Array[i]);
  }
  channel.sendMessage('Added Roles to your server :)');
});

bot.on('guildMemberAdd', member => {
  // get the channel by its ID
  const channel = bot.channels.get(member.guild.id);
  // send the message, mentioning the member
  channel.sendMessage(`WHATSUP BROTHA, ${member}!`);
});

bot.on('message', function (message) {});

bot.registry.registerGroup('admin', 'Admin')
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('random', 'Joke');
bot.registry.registerGroup('settings', 'Settings');
bot.registry.registerGroup('league', 'League');
bot.registry.registerGroup('rpg', 'Rpg');
bot.registry.registerDefaults();
bot.commandPrefix = '>';
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('censored');