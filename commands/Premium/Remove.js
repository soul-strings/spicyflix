const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ApplicationCommandOptionType,
    ButtonBuilder, ButtonStyle } = require("discord.js");
const Premium = require("../../settings/models/Premium.js")
const Profile = require("../../settings/models/Profile.js")
const moment = require('moment');

module.exports = {
    name: ["remove-premium"],
    description: "remove premium to user (developer)",
    options: [
        {
            name: "user",
            description: "mention user to remove",
            required: true,
            type: ApplicationCommandOptionType.User,
        }
    ],
    run: async (interaction, client, language) => {
        await interaction.deferReply({ ephemeral: false });

        if (interaction.user.id != client.owner) return interaction.editReply({ content: `you cant use this command !`, ephemeral: false });

        const mentions = interaction.options.getUser("user");

        const db = await Premium.findOne({ Id: mentions.id });

        if (db.isPremium) {
            db.isPremium = false
            db.premium.redeemedBy = []
            db.premium.redeemedAt = null
            db.premium.expiresAt = null
            db.premium.plan = null

            const newUser = await db.save({ new: true }).catch(() => { })
            client.premiums.set(newUser.Id, newUser);

            const embed = new EmbedBuilder()
                .setDescription(`premium of ${mentions} have been removed !`)
                .setColor(client.color)

            interaction.editReply({ embeds: [embed] });

        } else {
            const embed = new EmbedBuilder()
                .setDescription(`premium already removed or we cant find user`)
                .setColor(client.color)

            interaction.editReply({ embeds: [embed] });
        }
    }
}
