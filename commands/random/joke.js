const commando = require('discord.js-commando');
class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            group: 'random',
            memberName: 'joke',
            description: 'Tells an inside joke'
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        switch(roll){
            case 1:{
                message.reply('put your finger in your mouth dawg');
                break;
            }
            case 2:{
                message.reply('"i could fuck the shit out of an infant if i wanted to right now" - randeezy');
                break;
            }
            case 3:{
                message.reply('"i cant argue with a selfish ape nigger faggot cunt who does what he wants"');
                break;
            }
            case 4:{
                message.reply('"Ill give you 1 enderpearl for 50 iron"');
                break;
            }
            case 5:{
                message.reply('How my nut taste tho');
                break;
            }
            case 6:{
                message.reply('youre momma gay');
                break;
            }
            default: {
                console.log('');
                break;
            }
        }
    }
}

module.exports = JokeCommand;