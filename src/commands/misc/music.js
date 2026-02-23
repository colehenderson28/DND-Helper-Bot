const { ApplicationCommandOptionType, VoiceChannel } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
//const connection = getVoiceConnection(myVoiceChannel.guild.id)
module.exports = {
    name: 'music',
    description: 'plays music',
    options: [
        {
            name: 'channel',
            description: 'choose which channel to join',
            required: true,
            type: ApplicationCommandOptionType.Channel,
            ChannelType: VoiceChannel,
        },
    ],

    callback: (client, interaction) => {
        const voiceChannel = interaction.options.getChannel('channel');

        const voiceConnection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
    },
};
