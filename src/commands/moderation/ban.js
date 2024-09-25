const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
    userMention,
} = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'begone',
    //devOnly: Boolean,
    //testOnly: Boolean,
    options: [
        {
            name: 'target-user',
            description: 'the user to ban',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason',
            description: 'the reason for banning',
            required: true,
            type: ApplicationCommandOptionType.String,
        },
    ],
    //permissionsRequired: [PermissionFlagsBits.Administrator],
    //botPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        const userid = interaction.options.get('target-user');
        const banReason = interaction.options.get('reason');
        interaction.reply(
            `${userid.user} is banned. Reason: ${banReason.value}`
        );
    },
};
