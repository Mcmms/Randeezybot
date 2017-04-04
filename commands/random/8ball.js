const commando = require('discord.js-commando');
const prefix = '\\';
class eightballCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'random',
            memberName: '8ball',
            description: 'Determines fortune :)'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 9) + 1;
        if(args.endsWith('?')){
        switch(roll){
            case 1:{message.reply('Definately :^)'); break;}
            case 2:{message.reply('Without a doubt 8)'); break;}
            case 3:{message.reply('YEEEE :joy:'); break;}
            case 4:{message.reply('Ask again later'); break;}
            case 5:{message.reply('Cannot predict now :('); break;}
            case 6:{message.reply('Fam. Idfk'); break;}
            case 7:{message.reply('I dont see it'); break;}
            case 8:{message.reply('Its a no from me.'); break;}
            case 9:{message.reply('Most likely not.'); break;}
            default:{break;}
        }
        }else{message.reply('Ask a question silly');}
    }
}


module.exports = eightballCommand;