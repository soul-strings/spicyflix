const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, PermissionsBitField, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require("discord.js");
module.exports = {
    name: ["stats"],
    description: "check bot stats",
    run: async (interaction, client) => {

        if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.SendMessages)) {
            return await
                interaction.editReply({
                    content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'Send Messages'`,
                    ephemeral: true
                })
        }
        if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ViewChannel)) {
            return await
                interaction.editReply({
                    content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'View Channels'`,
                    ephemeral: true
                })
        }

        if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.EmbedLinks)) {
            return await
                interaction.editReply({
                    content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'Embed Links'`,
                    ephemeral: true
                })
        }


        const embed = new EmbedBuilder()
            .setTitle('SpicyFlix Stats')
            .setDescription(`Guilds Count: ${client.guilds.cache.size} | Shards Count: ${client.count} | This guild is on shard: #${client.id}`)
            //  .setImage(client.image)
            .setColor(client.color)
        return interaction.reply({
            embeds: [embed],
        })

    }
}
