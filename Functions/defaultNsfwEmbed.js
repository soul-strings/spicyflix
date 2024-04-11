const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    AttachmentBuilder } = require("discord.js");
require("dotenv").config();

function defaultNSFW(interaction) {
    const embed = new EmbedBuilder()
        .setImage("https://cdn.discordapp.com/attachments/1197997344378077235/1202219330092146718/SpicyFlix.gif")
        .setDescription(`${interaction.user.username}, this command can only works in NSFW channels please turn it back-on and try again using of this command\n\n[support server](${process.env.SUPPORT_SERVER})`)
        .setColor(process.env.EMBED_COLOR);

    return embed;
}

module.exports = {
    defaultNSFW,
};
