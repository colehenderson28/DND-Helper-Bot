const { ApplicationCommandOptionType, VoiceChannel } = require('discord.js');
const { getVoiceConnection, VoiceConnection } = require('@discordjs/voice');
//const connection = getVoiceConnection(myVoiceChannel.guild.id)
module.exports = {
    name: 'disconnect',
    description: 'disconnects bot from channel',

    callback: (client, interaction) => {
        const voiceConnection = getVoiceConnection(interaction.guildId).get(
            interaction.guildId
        );
    },
};
