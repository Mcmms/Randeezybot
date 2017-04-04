const commando = require('discord.js-commando');
const fs = require("fs");

class levelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'level',
            group: 'rpg',
            memberName: 'level',
            description: 'Displays level <3'
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        let userData = points[message.author.id];
        message.channel.sendMessage("```\nName: "+message.author.username+" \nLevel: "+userData.level+" \nPoints: "+userData.points+" \nPickaxe: "+userData.pickaxe+"\n```");
    }
}


module.exports = levelCommand;