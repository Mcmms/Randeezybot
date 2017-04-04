const commando = require('discord.js-commando');
var bot;
class muteCommand extends commando.Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'mute',
            group: 'admin',
            memberName: 'mute',
            description: 'mutes x'
        });
    }

    async run(message, args) {
        //console.log(args);
        var p = args.substring(2, args.length - 1);
        var p = p.replace('!','');
        var user = bot.users.get(p);
        var main = message.author;
        if (message.guild.member(main).hasPermission('MUTE_MEMBERS')) {
            message.guild.member(user).setMute(true);
            message.channel.sendMessage('Muted ' + args);
            console.log('muting ' + p);
        } else {
            message.reply('Skill level not high enough')
        }
    }
}


module.exports = muteCommand;