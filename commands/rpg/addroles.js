const commando = require('discord.js-commando');
const fs = require("fs");
var bot;
class addrolesCommand extends commando.Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'addroles',
            group: 'rpg',
            memberName: 'addroles',
            description: 'Creator use only'
        });
    }

    async run(message, args) {
        if (message.author.id == 148488274061688832) {
            let rpgRoles = JSON.parse(fs.readFileSync('rpg_files/roles.json', 'utf8'));
            const guildData = bot.guilds.get(message.guild.id);
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
            for(var i = Array.length - 1; i >= 0; i--){
                //console.log(Array[i]);
                guildData.createRole(Array[i]);
            }
            message.reply('Added Roles to server ;)');
        }
    }
}


module.exports = addrolesCommand;