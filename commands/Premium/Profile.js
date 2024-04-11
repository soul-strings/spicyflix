const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ApplicationCommandOptionType,
    ButtonBuilder, ButtonStyle } = require("discord.js");
const Premium = require("../../settings/models/Premium.js")
const Profile = require("../../settings/models/Profile.js")
const moment = require('moment');

module.exports = {
    name: ["my-redeem"],
    description: "check your premium status",
    run: async (interaction, client, language) => {
        const user = client.premiums.get(interaction.user.id)
        await interaction.deferReply({ ephemeral: false });
        const PremiumPlan = await Premium.findOne({ Id: interaction.user.id })
        const expires = moment(PremiumPlan.premium.expiresAt).format('dddd, MMMM Do YYYY HH:mm:ss');

        const info = await Premium.findOne({ Id: interaction.user.id });
        const timeLeft = moment.duration(info.premium.expiresAt - Date.now()).format("d [days], h [hours], m [minutes]");
        const profile = await Profile.findOne({ userId: interaction.user.id });

        try {
            if (user && user.isPremium) {
                const embed = new EmbedBuilder()
                    .setDescription(`**${interaction.user.username} your premium is active and your order is ${PremiumPlan.premium.plan}**\n\nyou can use your premium untill ${timeLeft}`)
                    .setColor(client.color)

                return interaction.editReply({ embeds: [embed] });

            } else {
                const Premiumed = new EmbedBuilder()
                    .setDescription(`${interaction.user.username} you don't have premium !`)
                    .setColor(client.color)

                return interaction.editReply({ content: " ", embeds: [Premiumed] });
            }
        } catch (err) {
            console.log(err)
            interaction.editReply({ content: `we cant find your info please contact my [developer](${client.support}) to check your problem` })
        }

    }
}
