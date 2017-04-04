const commando = require('discord.js-commando');
const fs = require("fs");

class giveCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'give',
            group: 'rpg',
            memberName: 'give',
            description: 'Gives your points to @mention'
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        let user = message.mentions.users.first();
        let first = points[message.author.id];
        let second = points[user.id];
        var data = args.split(' ');
        var amount = data[1];
        if (message.author == user) {
            message.reply('Cant gift yourself silly');
            return;
        }
        if (isNaN(amount)) {
            message.reply('Usage: >give (mention) amount');
            return;
        }
        if (amount < 1) {
            message.reply('This doesnt even make sense.');
            return;
        }
        if (first.points < amount) {
            message.reply('You cant give more than what you have silly');
            return;
        }
        first.points -= parseInt(amount);
        second.points += parseInt(amount);
        message.channel.sendMessage('Successfully gave '+user.username+' '+amount+' points!');
        fs.writeFile('rpg_files/points.json', JSON.stringify(points, null, 4), (err) => {
            if (err) console.error(err)
        });
    }
}


module.exports = giveCommand;