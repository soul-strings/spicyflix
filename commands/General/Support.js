const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: ["support"],
    description: "get bot support server",
    run: async (interaction, client, user, language) => {

        const embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: "Support Server" })
            .setDescription(`[:wave: ${interaction.user.username}, Click on below button or this link to join support server](${client.support})`)

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Support")
                    .setURL(`${client.support}`)
                    .setStyle(ButtonStyle.Link)
            )

        interaction.editReply({ embeds: [embed], components: [row] });
    }
}