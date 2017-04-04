const commando = require('discord.js-commando');
const fs = require("fs");

class mineCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mine',
            group: 'rpg',
            memberName: 'mine',
            description: 'Mines ore',
            throttling: {
                usages: 1,
                duration: 15
            }
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        if (message.author.bot) return;
        if (message.channel.name != 'rpg') {
            message.reply('Command must be used in text channel "rpg"');
            return;
        }
        var stone = {
            worth: 5
        };
        var coal = {
            worth: 10
        };
        var iron = {
            worth: 20
        };
        var diamond = {
            worth: 100
        };
        var emerald = {
            worth: 500
        };
        var brandonsHair = {
            worth: -100
        };
        var stonepick = {
            value: .05
        }
        var ironpick = {
            value: .25
        }
        var diamondpick = {
            value: .40
        }
        var legendarypick = {
            value: .65
        }
        if (!points[message.author.id]) points[message.author.id] = {
            points: 0,
            level: 0,
            pickaxe: "wood"
        };
        if (!points[message.author.id].pickaxe) points[message.author.id] = {
            points: points[message.author.id].points,
            level: points[message.author.id].level,
            pickaxe: "wood"
        };
        let userData = points[message.author.id];
        var roll = Math.floor(Math.random() * 100) + 1;
        if (roll > 1 && roll < 21) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        userData.points += iron.worth;
                        message.reply('You found Iron and got 20 points');
                        break;
                    }
                case "stone":
                    {
                        var val = iron.worth + (iron.worth * stonepick.value);
                        userData.points += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                case "iron":
                    {
                        var val = iron.worth + (iron.worth * ironpick.value);
                        userData.points += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                case "diamond":
                    {
                        var val = iron.worth + (iron.worth * diamondpick.value);
                        userData.points += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                case "legendary":
                    {
                        var val = iron.worth + (iron.worth * legendarypick.value);
                        userData.points += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                default:
                    break;
            }

        } else if (roll > 20 && roll < 51) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        userData.points += coal.worth;
                        message.reply('You found Coal and got 10 points');
                        break;
                    }
                case "stone":
                    {
                        var val = coal.worth + (coal.worth * stonepick.value);
                        userData.points += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                case "iron":
                    {
                        var val = coal.worth + (coal.worth * ironpick.value);
                        userData.points += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                case "diamond":
                    {
                        var val = coal.worth + (coal.worth * diamondpick.value);
                        userData.points += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                case "legendary":
                    {
                        var val = coal.worth + (coal.worth * legendarypick.value);
                        userData.points += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                default:
                    break;
            }
        } else if (roll > 50 && roll < 56) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        userData.points += diamond.worth;
                        message.reply('You found DIAMOND and got 100 points PogChamp');
                        break;
                    }
                case "stone":
                    {
                        var val = diamond.worth + (diamond.worth * stonepick.value);
                        userData.points += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                case "iron":
                    {
                        var val = diamond.worth + (diamond.worth * diamondpick.value);
                        userData.points += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                case "diamond":
                    {
                        var val = diamond.worth + (diamond.worth * diamondpick.value);
                        userData.points += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                case "legendary":
                    {
                        var val = diamond.worth + (diamond.worth * legendarypick.value);
                        userData.points += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                default:
                    break;
            }
            

        } else if (roll > 55 && roll < 57) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        userData.points += emerald.worth;
                        message.reply('YOU FOUND !@#$ING EMERALDS 500 to score');
                        break;
                    }
                case "stone":
                    {
                        var val = emerald.worth + (emerald.worth * stonepick.value);
                        userData.points += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                case "iron":
                    {
                        var val = emerald.worth + (emerald.worth * emeraldpick.value);
                        userData.points += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                case "diamond":
                    {
                        var val = emerald.worth + (emerald.worth * emeraldpick.value);
                        userData.points += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                case "legendary":
                    {
                        var val = emerald.worth + (emerald.worth * legendarypick.value);
                        userData.points += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                default:
                    break;
                    
            }
        } else if (roll > 56 && roll < 60) {
            userData.points += brandonsHair.worth;
            message.reply('You found a lock of brandons hair.. gross... -100 points..');
        } else {
            userData.points += stone.worth;
            message.reply('You found Cobblestone.. Meh 5 points');
        }
        let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
        if (curLevel > userData.level) {
            // Level up!
            userData.level = curLevel;
            message.reply(`You've leveled up to level **${curLevel}**! Pretty rad fam!`);
        }
        fs.writeFile('rpg_files/points.json', JSON.stringify(points, null, 4), (err) => {
            if (err) console.error(err)
        });
    }
}


module.exports = mineCommand;