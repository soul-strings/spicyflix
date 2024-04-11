const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require("discord.js");

module.exports = {
    name: ["help"],
    description: "get help about bot",
    run: async (interaction, client) => {
        const embed = new EmbedBuilder()
            .setColor(client.color)
            .setImage("https://cdn.discordapp.com/attachments/1140544084293976087/1143870318172176394/banner.png")
            .setDescription(`:wave: ${interaction.user.username}, im SpicyFlix a greate nsfw bot that you always imagine could be exist! with cool section like *auto post*, *adult commands* and many more! you must just type **/** to see all my commands to use me!\n\nshhhh add me in your server and enjoy, yourwelcome :)`)

        const btns = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Invite")
                    .setURL(client.invite)
                    .setStyle(ButtonStyle.Link),
                new ButtonBuilder()
                    .setLabel("Support")
                    .setURL(client.support)
                    .setStyle(ButtonStyle.Link)
            )
        interaction.reply({ content: `join our community ${client.support}`, embeds: [embed], components: [btns] });
    }
}
