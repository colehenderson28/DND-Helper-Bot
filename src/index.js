require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

//message to verify bot is online

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === 'hey') {
            interaction.reply('hey');
        }
        if (interaction.commandName === 'roll') {
            const die = interaction.options.get('die-choice');
            console.log(die);
            const num = interaction.options.get('number-of-dice');
            console.log(num);
            if (num <= 0) {
                interaction.reply('You must roll at least one die.');
            }

            let sides;
            switch (die.value) {
                case 1:
                    sides = 20;
                    console.log(`sides is set to ${sides}`);
                    break;
                case 2:
                    sides = 12;
                    console.log(`sides is set to ${sides}`);
                    break;
                case 3:
                    sides = 10;
                    console.log(`sides is set to ${sides}`);
                    break;
                case 4:
                    sides = 8;
                    console.log(`sides is set to ${sides}`);
                    break;
                case 5:
                    sides = 6;
                    console.log(`sides is set to ${sides}`);
                    break;
                case 6:
                    sides = 4;
                    console.log(`sides is set to ${sides}`);
                    break;
            }
            console.log(sides);
            let result = 0;

            for (let i = 0; i < num.value; i++) {
                var temp = Math.random() * sides;
                console.log(temp);
                if (!isNaN(temp)) {
                    result += Math.floor(temp) + 1;
                }
                console.log(result);
            }
            console.log(result);
            interaction.reply(`You rolled a ${result}!`);
        }
    }
});

client.on('messageCreate', (message) => {
    //check to keep the bot from replying to itself
    if (message.author.bot) {
        return;
    }

    //reply to message if it contains this content
    if (message.content === 'It is time, assemble the men') {
        message.reply(
            'Right away!\n<@328730137048776704>\n<@454047936222068757>\n<@617427781592023042>\n<@1006664937575292999>\n<@365713038994571264>\nThe time for adventure is upon us!'
        );
    }
});

//logs bot in using token from env
client.login(process.env.TOKEN);
