const commando = require('discord.js-commando');
class feedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'admin',
            memberName: 'feed',
            description: 'Feed Me <3'
        });
    }

    async run(message, args) {
        if(message.author.id == 148488274061688832)
            message.reply('ty dad');
        else
            message.reply('I dont want you over feeding me queer');
    }
}


module.exports = feedCommand;