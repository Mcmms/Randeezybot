const commando = require('discord.js-commando');
var fs = require('fs');
var ver;
class logCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'log',
            group: 'settings',
            memberName: 'log',
            description: 'DMs Changelog'
        });
    }

    async run(message, args) {
        var contents = fs.readFileSync('log.txt', 'utf8');
        message.author.sendMessage(contents);
        message.reply('Log sent to your DMs');
    }
}


module.exports = logCommand;