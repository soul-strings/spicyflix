const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ApplicationCommandOptionType,
    ButtonBuilder, ButtonStyle } = require("discord.js");
const voucher_codes = require('voucher-code-generator');
const Redeem = require("../../settings/models/GRedeem");
const moment = require('moment');

module.exports = {
    name: ["guild-code"],
    description: "premium code (developer)",
    options: [
        {
            name: "type",
            description: "type",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "num",
            description: "num",
            required: false,
            type: ApplicationCommandOptionType.String,
        }
    ],
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });

        if (interaction.user.id != client.owner) return interaction.editReply({ content: `you cant use this command !`, ephemeral: false });

        const name = interaction.options.getString("type");
        const camount = interaction.options.getString("num");

        let codes = [];

        const plan = name;
        const plans = ['daily', 'weekly', 'monthly', 'yearly'];

        if (!plans.includes(name))
            return interaction.editReply({
                content: `not corrected plans ${plans.join(', ')}`, ephemeral: false
            })

        let time;
        if (plan === 'daily') time = Date.now() + 86400000;
        if (plan === 'weekly') time = Date.now() + 86400000 * 7;
        if (plan === 'monthly') time = Date.now() + 86400000 * 30;
        if (plan === 'yearly') time = Date.now() + 86400000 * 365;

        let amount = camount;
        if (!amount) amount = 1;

        for (var i = 0; i < amount; i++) {
            const codePremium = voucher_codes.generate({
                prefix: "spicyflix-guild-",
                postfix: "-2024",
                pattern: '####-####-####'
            })
            const code = codePremium.toString().toUpperCase()
            const find = await Redeem.findOne({ code: code })

            if (!find) {
                Redeem.create({
                    code: code,
                    plan: plan,
                    expiresAt: time
                }),
                    codes.push(`${i + 1} - ${code}`)
            }
        }

        const embed = new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`premium codes created\n\n${codes.join('\n')}\n\n this code will expires at ${moment(time).format('dddd, MMMM Do YYYY')} [${plan}]`)
        interaction.editReply({ embeds: [embed] })


    }
}
