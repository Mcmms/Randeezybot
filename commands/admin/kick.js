const commando = require('discord.js-commando');
var bot;
class muteCommand extends commando.Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'kicks x'
        });
    }

    async run(message, args) {
        //console.log(args);
        var p = args.substring(2, args.length - 1);
        var p = p.replace('!','');
        var user = bot.users.get(p);
        var main = message.author;
        if (message.guild.member(main).hasPermission('KICK_MEMBERS') && message.guild.member(main).kickable) {
            message.guild.member(user).kick();
            message.channel.sendMessage('Kicked ' + args);
            console.log('kicking ' + p);
        } else {
            message.reply('Skill level not high enough')
        }
    }
}


module.exports = muteCommand;