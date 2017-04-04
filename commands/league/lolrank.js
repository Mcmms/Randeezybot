const commando = require('discord.js-commando');
var LolApi = require('leagueapi');
var Name = '';
var Id = '';
var Level = '';
var Tier = '';
var Division = '';
class lolrankCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lolrank',
            group: 'league',
            memberName: 'lolrank',
            description: 'displays rank of x player'
        });
    }

    async run(message, args) {
        LolApi.init('censored', 'na');
        LolApi.setRateLimit(10, 500);
        var input = '';
        args = args.toLowerCase();
        args = args.replace(/\s+/g, '');
        console.log(args);
        LolApi.Summoner.getByName(args, function (err, summoner) {
            if (!err) {
                Name = summoner[args].name;
                Name = Name.toLowerCase();
                Name = Name.replace(/\s+/g, '');
                Id = summoner[Name].id;
                Level = summoner[Name].summonerLevel;

                input += "\nName: " + summoner[Name].name + '\n' +
                    "Level: " + Level + "\n";
                console.log(input);
                //message.reply(input);
                if(Level == 30){
                LolApi.getLeagueEntryData(Id, 'NA', function (err, summoner) {
                    if (!err) {
                        Tier = summoner[Id][0].tier;
                        Division = summoner[Id][0].entries[0].division;
                        input += "Tier: " + Tier + '\n' +
                            "Division: " + Division;
                        message.reply(input);
                    } else {
                        message.reply('Try again');
                    }
                })
                }else{
                    input += "UNRANKED";
                    message.reply(input);
                }
            }
            else {
                message.reply('Try again');
            }
        });

    }
}


module.exports = lolrankCommand;