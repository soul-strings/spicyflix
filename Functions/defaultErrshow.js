const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle } = require("discord.js");
require("dotenv").config();

function defershow(interaction) {
    const embed = new EmbedBuilder()
        .setDescription(`something went wrng while send request to api please report this issue to the support servre or try using command later**\n\n[support server](${process.env.SUPPORT_SERVER})`)
        .setColor(process.env.EMBED_COLOR);

    return embed;
}

module.exports = {
    defershow,
};
