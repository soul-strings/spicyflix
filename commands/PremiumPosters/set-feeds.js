const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ChannelType } = require("discord.js");
const db = require("../../settings/models/AutoFeeds");
const { defaultNSFW } = require("../../Functions/defaultNsfwEmbed");
const { defaultPremium } = require("../../Functions/defaultPremiumer");
module.exports = {
    name: ["set", "feeds", "auto"],
    description: "set auto feeds in your channel",
    options: [
        {
            name: 'channel',
            description: 'select your channel to set auto video posting',
            type: ApplicationCommandOptionType.Channel,
            channelTypes: [ChannelType.GuildText],
            required: true,
        },
        {
            name: 'select_your_category',
            description: 'which type of content you want to get ?',
            required: true,
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: 'Ass',
                    value: 'sel_ass',
                },
                {
                    name: 'Pussy',
                    value: 'sel_pussy',
                },
                {
                    name: 'Amateur',
                    value: 'sel_amateur',
                },
                {
                    name: 'Gay',
                    value: 'sel_gay',
                },
                {
                    name: 'Dick',
                    value: 'sel_dick',
                },
                {
                    name: 'Cute',
                    value: 'sel_cute',
                },
                {
                    name: 'Homemade',
                    value: 'sel_homemade',
                },
                {
                    name: 'Teen',
                    value: 'sel_teen',
                },
                {
                    name: 'Blowjob',
                    value: 'sel_blowjob',
                },
                {
                    name: 'Boobs',
                    value: 'sel_boobs',
                },
                {
                    name: 'Random',
                    value: 'sel_random',
                },
            ],
        },
    ],
    run: async (interaction, client) => {
        interaction.deferReply().then(async () => {
            const channel = interaction.options.getChannel("channel");
            const choice = interaction.options.getString('select_your_category');
            console.log(choice)
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

                //doing some shits here

                let selectedop;
                if (choice === 'sel_random') {
                    selectedop = 'Homemade';
                } else if (choice === 'sel_dick') {
                    selectedop = 'Big Dick';
                } else if (choice === 'sel_ass') {
                    selectedop = 'Asshole';
                } else if (choice === 'sel_pussy') {
                    selectedop = 'Fat Pussy';
                } else if (choice === 'sel_gay') {
                    selectedop = 'Gay';
                } else if (choice === 'sel_blowjob') {
                    selectedop = 'Blowjob';
                } else if (choice === 'sel_homemade') {
                    selectedop = 'Homemade';
                } else if (choice === 'sel_amateur') {
                    selectedop = 'Amateur';
                } else if (choice === 'sel_teen') {
                    selectedop = 'Teen';
                } else if (choice === 'sel_cute') {
                    selectedop = 'Cute';
                } else if (choice === 'sel_boobs') {
                    selectedop = 'Boobs';
                }


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
                        contenttype: selectedop,
                    })
                    await joinChannel.save().catch((err) => console.log(err));
                    const successEmbed = new EmbedBuilder()
                        .setDescription(`successfully created auto feeds in your guild you will get random content every ~1-2 hours in your channel`)
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
                        { channelId: channel.id, webhook: webhookUrl, contenttype: selectedop },
                    ).exec();

                    const successEmbed = new EmbedBuilder()
                        .setDescription(`you have updated your channel or webhook to get feeds`)
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