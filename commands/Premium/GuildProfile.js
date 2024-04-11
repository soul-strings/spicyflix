const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ApplicationCommandOptionType,
    ButtonBuilder, ButtonStyle } = require("discord.js");
const Premium = require("../../settings/models/GPremium.js")
const Profile = require("../../settings/models/GProfile.js")
const moment = require('moment');

module.exports = {
    name: ["guild-premium-stats"],
    description: "check your premium status",
    run: async (interaction, client, language) => {
        const user = client.premiums.get(interaction.guild.id)
        await interaction.deferReply({ ephemeral: false });
        const PremiumPlan = await Premium.findOne({ Id: interaction.guild.id })
        const expires = moment(PremiumPlan.premium.expiresAt).format('dddd, MMMM Do YYYY HH:mm:ss');

        const info = await Premium.findOne({ Id: interaction.guild.id });
        const timeLeft = moment.duration(info.premium.expiresAt - Date.now()).format("d [days], h [hours], m [minutes]");
        const profile = await Profile.findOne({ userId: interaction.guild.id });

        try {
            if (user && user.isPremium) {
                const embed = new EmbedBuilder()
                    .setDescription(`**${interaction.user.username} your guild premium is active and your order is ${PremiumPlan.premium.plan}**\n\nyou can use your premium untill ${timeLeft}`)
                    .setColor(client.color)

                return interaction.editReply({ embeds: [embed] });

            } else {
                const Premiumed = new EmbedBuilder()
                    .setDescription(`your guild dont have permium`)
                    .setColor(client.color)

                return interaction.editReply({ content: " ", embeds: [Premiumed] });
            }
        } catch (err) {
            console.log(err)
            interaction.editReply({ content: `we cant find your info please contact my [developer](${client.support}) to check your problem` })
        }

    }
}
