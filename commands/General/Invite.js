const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require("discord.js");
module.exports = {
    name: ["invite"],
    description: "invite SpicyFlix in your server",
    run: async (interaction, client) => {

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Invite")
                    .setURL(client.invite)
                    .setStyle(ButtonStyle.Link)
            )

        const embed = new EmbedBuilder()
            .setDescription(`[:heart: Thanks ${interaction.user.username} for inviting SpicyFlix, click on this link or below button to invite SpicyFlix](${client.invite})`)
            .setColor(client.color)

        interaction.reply({ embeds: [embed], components: [row] });
    }
}
