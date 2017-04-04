const commando = require('discord.js-commando');
const fs = require("fs");
let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
var bot;

class leaderboardCommand extends commando.Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'leaderboard',
            group: 'rpg',
            memberName: 'leaderboard',
            description: 'Shows Top 5 Players 8)'
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        let userData = points[message.author.id];
        var sort_array = [];
        for (var i in points) {
            sort_array.push({
                id: i,
                points: points[i].points
            });
        }
        
        sort_array.sort(function(x,y){return y.points - x.points});
        //console.log(sort_array);
        var first,second,third,fourth,fifth;
        first = bot.users.get(sort_array[0].id);
        second = bot.users.get(sort_array[1].id);
        third = bot.users.get(sort_array[2].id);
        fourth = bot.users.get(sort_array[3].id);
        fifth = bot.users.get(sort_array[4].id);
        message.channel.sendMessage("```javascript\n"+"=========="+
                                        "\n[1] "+first.username + ": "+sort_array[0].points+
                                       "\n[2] "+second.username + ": "+sort_array[1].points+
                                       "\n[3] "+third.username + ": "+sort_array[2].points+
                                       "\n[4] "+fourth.username + ": "+sort_array[3].points+
                                       "\n[5] "+fifth.username + ": "+sort_array[4].points+"\n==========```");
    }



}



module.exports = leaderboardCommand;