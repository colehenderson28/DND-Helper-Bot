const { ApplicationCommandOptionType } = require('discord.js');
const { integer, nodeCrypto } = require('random-js');
const engine = nodeCrypto;
module.exports = {
    name: 'roll',
    description: 'rolls a specified number of a specified die',
    options: [
        {
            name: 'die-choice',
            description: 'pick which die to roll',
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: 'd20',
                    value: 1,
                },
                {
                    name: 'd12',
                    value: 2,
                },
                {
                    name: 'd10',
                    value: 3,
                },
                {
                    name: 'd8',
                    value: 4,
                },
                {
                    name: 'd6',
                    value: 5,
                },
                {
                    name: 'd4',
                    value: 6,
                },
            ],
            required: true,
        },
        {
            name: 'number-of-dice',
            description: 'The number of dice to roll',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ],

    callback: (client, interaction) => {
        const die = interaction.options.get('die-choice');
        console.log(die);
        const num = interaction.options.get('number-of-dice');
        console.log(num);
        if (num.value <= 0) {
            interaction.reply('You must roll at least one die.');
            return;
        }
        if (num.value > 15) {
            interaction.reply('Too many dice, knock it off dice goblin.');
            return;
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
            result += integer(1, sides)(engine);
            console.log(result);
        }
        console.log(result);
        interaction.reply(`You rolled a ${result}!`);
    },
};
