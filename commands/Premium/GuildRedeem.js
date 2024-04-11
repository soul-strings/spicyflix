const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ApplicationCommandOptionType,
    ButtonBuilder, ButtonStyle } = require("discord.js");
const Redeem = require("../../settings/models/GRedeem");
const Premium = require("../../settings/models/GPremium")
const moment = require('moment');

module.exports = {
    name: ["guild-redeem"],
    description: "active premium",
    options: [
        {
            name: "code",
            description: "enter premium code",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
    ],
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });

        const input = interaction.options.getString("code");

        let member = await Premium.findOne({ Id: interaction.guild.id })

        if (member && member.isPremium) {
            const embed = new EmbedBuilder()
                .setColor(client.color)
                .setDescription(`This guild premium was actived`)
            return interaction.editReply({ embeds: [embed] });
        }


        const premium = await Redeem.findOne({ code: input.toUpperCase() });
        if (premium) {
            const expires = moment(premium.expiresAt).format('dddd, MMMM YYYY HH:mm:ss')

            member.isPremium = true
            member.premium.redeemedBy.push(interaction.user)
            member.premium.redeemedAt = Date.now()
            member.premium.expiresAt = premium.expiresAt
            member.premium.plan = premium.plan

            member = await member.save({ new: true });
            client.premiums.set(interaction.guild.id, member);
            await premium.deleteOne();

            const embed = new EmbedBuilder()
                .setDescription(`${interaction.user.username} your premium have been actived for ${expires} in your guild !\n\nthanks for using SpicyFlix`)
                .setColor(client.color)

            return interaction.editReply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setColor(client.color)
                .setDescription(`your entered code is not vailed code ! contact [developers](${client.support}) to check your problem`)
            return interaction.editReply({ embeds: [embed] })
        }

    }
}
