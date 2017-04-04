const commando = require('discord.js-commando');
class inviteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'admin',
            memberName: 'invite',
            description: 'gives a link to invite'
        });
    }

    async run(message, args) {
        if(message.author.id == 148488274061688832)
            message.reply("https://discord.gg/vTvjVwd");
    }
}


module.exports = inviteCommand;