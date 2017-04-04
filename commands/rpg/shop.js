const commando = require('discord.js-commando');
const fs = require("fs");

class shopCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shop',
            group: 'rpg',
            memberName: 'shop',
            description: 'displays all available items'
        });
    }

    async run(message, args) {
        if (message.author.bot) return;
        if (message.channel.name != 'rpg') {
            message.reply('Command must be used in text channel "rpg"');
            return;
        }
        let items = JSON.parse(fs.readFileSync('rpg_files/items.json', 'utf8'));
        var array = [];
        for (var i in items) {
            if (items[i].purchasable) {
                array.push({
                    name: items[i].name,
                    worth: items[i].worth,
                    description: items[i].description
                });
            }
        }
        var output = "```javascript\n";
        for (var i in array) {
            output += "-->" + array[i].name + ": " + array[i].worth + " points\n Description: "+array[i].description + "\n";
        }
        output += "```";
        message.author.sendMessage(output);
    }
}


module.exports = shopCommand;