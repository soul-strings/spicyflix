const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle } = require("discord.js");
require("dotenv").config();

function defaultPremium(interaction) {
    const embed = new EmbedBuilder()
        .setTitle("Premium Required!")
        .setDescription(`${interaction.user.username}, this command needs premium to work and you can join our [support](${process.env.SUPPORT_SERVER}) to read about how you can get premium`)
        .setColor(process.env.EMBED_COLOR)

    return embed;
}

module.exports = {
    defaultPremium,
};
