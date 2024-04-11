const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField } = require("discord.js");
const db = require("../../settings/models/AutoWebhookSender");

module.exports = {
    name: ["auto", "reddit", "remove"],
    description: "Remove autonude reddit posting in your server",
    run: async (interaction, client) => {
        interaction.deferReply().then(async () => {
            if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
                const perm = new EmbedBuilder()
                    .setDescription(`You dont have **Admin** permission to do this command, please check your premissions and try again`)
                    .setColor(client.color)
                return await interaction.editReply({
                    embeds: [perm],
                    ephemeral: true
                })
            }

            const getinfo = await db.findOne({ guildId: interaction.guild.id }) // User: interaction.user.id 
            const embed = new EmbedBuilder()
                .setDescription(`This guild (${interaction.guild.name}) dosent have any saved channel to delete if you think this was an error you can join my [support server](${client.support}) and ask about your question`)
                .setColor(client.color)

            if (!getinfo) return interaction.editReply({
                embeds: [embed]
            });

            await db.findOneAndDelete({
                guildId: interaction.guild.id,
            });

            await db.findOneAndDelete({
                guildId: interaction.guild.id,
            });



            const successEmbed = new EmbedBuilder()
                .setDescription(`Removed auto reddit system in this guild`)
                .setColor(client.color)
                .setFooter({ text: `done by ${interaction.user.username}` });
            await interaction.editReply({
                embeds: [successEmbed]
            });
        })
    }
}