const commando = require('discord.js-commando');
var bot;
class unmuteCommand extends commando.Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'stats',
            group: 'admin',
            memberName: 'stats',
            description: 'displays stats'
        });
    }

    async run(message, args) {
        if(message.author.id == 148488274061688832){
            message.reply('Users using: ' + bot.users.size + "\n" +
            'Servers using: ' + bot.guilds.size);
        }else{
            message.reply('Skill level not high enough');
        }
    }
}


module.exports = unmuteCommand;