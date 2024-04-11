const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ChannelType } = require("discord.js");
const db = require("../../settings/models/AutoLeftRight");
const { defaultNSFW } = require("../../Functions/defaultNsfwEmbed");
const { defaultPremium } = require("../../Functions/defaultPremiumer");

module.exports = {
    name: ["auto", "left-right", "set"],
    description: "Set auto left or right posting in your channel",
    options: [
        {
            name: 'channel',
            description: 'select your channel to set auto video posting',
            type: ApplicationCommandOptionType.Channel,
            channelTypes: [ChannelType.GuildText],
            required: true,
        }],
    run: async (interaction, client) => {
        interaction.deferReply().then(async () => {
            const channel = interaction.options.getChannel("channel");

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
                const perm = new EmbedBuilder()
                    .setDescription(`You dont have **Admin** permission to do this command, please check your premissions and try again`)
                    .setColor(client.color)
                return await interaction.editReply({
                    embeds: [perm],
                    ephemeral: true
                })
            }

            if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ManageWebhooks)) {
                const perm = new EmbedBuilder()
                    .setDescription(`I dont have **Manage Webhooks** permission to do this command, please check my premissions and try again`)
                    .setColor(client.color)
                return await
                    interaction.editReply({
                        embeds: [perm],
                        ephemeral: true
                    })
            }


            if (!channel.nsfw) return interaction.editReply({ embeds: [defaultNSFW(interaction)] })

            const guildss = client.premiums.get(interaction.guild.id)

            if (guildss && guildss.isPremium) {

                const joinSys = await db.findOne({
                    guildId: interaction.guild.id,
                });


                if (!joinSys) {
                    const CreatedWebhook = await channel.createWebhook({
                        name: 'SpicyFlix',
                        avatar: 'https://cdn.discordapp.com/avatars/1185495860008730745/a3283d2aed77b9ff305fb30d205ea6e2.png?size=1024',
                    });

                    const webhookUrl = CreatedWebhook.url;


                    joinChannel = new db({
                        guildId: interaction.guild.id,
                        channelId: channel.id,
                        webhook: webhookUrl,
                    })
                    await joinChannel.save().catch((err) => console.log(err));
                    const successEmbed = new EmbedBuilder()
                        .setDescription(`successfully created auto left or right posting in your guild you will get random content every ~1 hour in your channel`)
                        .setColor(client.color);

                    await interaction.editReply({
                        embeds: [successEmbed],
                    });
                } else if (joinSys) {

                    const CreatedWebhook = await channel.createWebhook({
                        name: 'SpicyFlix',
                        avatar: 'https://cdn.discordapp.com/avatars/1185495860008730745/a3283d2aed77b9ff305fb30d205ea6e2.png?size=1024',
                    });

                    const webhookUrl = CreatedWebhook.url;
                    console.log(webhookUrl)
                    await db.findOneAndUpdate(
                        { guildId: interaction.guild.id },
                        { channelId: channel.id, webhook: webhookUrl },
                    ).exec();

                    const successEmbed = new EmbedBuilder()
                        .setDescription(`you have updated your channel or webhook to get left or right content`)
                        .setColor(client.color);

                    await interaction.editReply({
                        embeds: [successEmbed],
                    });
                }
            } else {
                return interaction.editReply({ embeds: [defaultPremium(interaction)] });
            }
        })
    }
}