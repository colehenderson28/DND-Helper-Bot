//temporary file to set up and register slash commands
require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
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
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering commands');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );
        console.log('Commands were registered');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();
