require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
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

eventHandler(client);

//logs bot in using token from env
client.login(process.env.TOKEN);
