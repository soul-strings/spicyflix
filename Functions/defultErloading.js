const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle } = require("discord.js");
require("dotenv").config();

function defaulterloading(interaction) {
    const embed = new EmbedBuilder()
        .setDescription(`file was too large to upload! **just try using commands again to get more content**\n\n[support server](${process.env.SUPPORT_SERVER})`)
        .setColor(process.env.EMBED_COLOR);

    return embed;
}

module.exports = {
    defaulterloading,
};
