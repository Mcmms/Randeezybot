const commando = require('discord.js-commando');
var bot;
class RoastCommand extends commando.Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'roast',
            group: 'random',
            memberName: 'roast',
            description: 'Inside Roast'
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random() * 1) + 1;
        switch (roll) {
            case 1:
                {
                    if (message.author.id == 176146541231210496) {
                        message.reply('I heard you fucked your dog');
                    } else if (message.author.id == 244618889483255809) {
                        message.reply('I would feel bad about roasting fiddle sticks..');
                    } else if (message.author.id == 235204343509286912) {
                        message.reply('I dont know whats worse.. my Azir or your eating habits');
                    } else if (message.author.id == 111250867709018112) {
                        message.reply('Hows that goat treating you?');
                    } else if (message.author.id == 148488274061688832) {
                        //randeezy
                        message.channel.sendFile('files/riprandeezy.mp4', 'riprandeezy.mp4');
                    } else if (message.author.id == 187373610040688641) {
                        message.reply('Hows your gorilla holding up?');
                    } else if (message.author.id == 236920181668970496) {
                        message.reply('Couldnt find the hole? :thinking:');
                    } else if (message.author.id == 251934127958261760) {
                        message.reply('Word on the street is you have the BEST NOSE NA');
                    } else if (message.author.id == 257007893893611520) {
                        message.reply('I could tell you to cut your hair... but whats the fun in bullying an autistic kid');
                    } else if (message.author.id == 238760443147976709) {
                        message.reply('████████████  loading in those extra chromosomes you requested');
                    } else if (message.author.id == 138812991444484096){
                        message.reply('You got big tits for a boy')
                    }else if (message.author.id == 143404398461190144) {
                        message.reply('I hope you can smell my roast with that nose');
                    } else {
                        message.reply('i dont have any roasts for you... kys nerd?');
                    }
                    console.log('Attemping to roast '+message.author.username);
                    break;
                }
            default:
                break;
        }
    }
}

module.exports = RoastCommand;