const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const get_res = require('../../Functions/reddit_cmd_subs/Gonewild');
const { defaultNSFW } = require("../../Functions/defaultNsfwEmbed");
require("dotenv").config();

module.exports = {
    name: ["reddit", "gonewild"],
    description: "get random gonewild porn",
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });

        if (!interaction.channel.nsfw) {
            interaction.reply({ embeds: [defaultNSFW(interaction)] })
        } else {
            try {
                let rs = get_res();
                //let json = await fetch(`https://www.reddit.com/r/${rs}/random/.json`).then(r => r.json());
                let json = await fetch(`https://www.reddit.com/r/${rs}/random/.json`, {
                    method: 'GET',
                    headers: {
                        'User-Agent': process.env.REDDIT_AGENT,
                        'Authorization': `Bearer `
                    },
                })
                    .then(r => r.json());
                let permalink = json[0].data.children[0].data.permalink;
                let posturl = `https://reddit.com${permalink}`;
                let postimage = json[0].data.children[0].data.url;
                let posttitle = json[0].data.children[0].data.title;
                let postup = json[0].data.children[0].data.ups;
                let postcomments = json[0].data.children[0].data.num_comments;


                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId(`reddit-gonewild`)
                            //   .setLabel("")
                            .setEmoji('<:remoji:1152729404145930281>')
                            .setStyle(ButtonStyle.Secondary)
                    )

                interaction.editReply({
                    content: `**[${rs}] • ${posttitle}**\n👍 ${postup} | 📝 ${postcomments}\n[⠀](${postimage})`,
                    components: [row]
                })
                const filter = i => i.customId === `reddit-gonewild`

                const collector = interaction.channel.createMessageComponentCollector({
                    filter,
                    time: 60000 * 5
                });
                try {
                    collector.on('collect', async i => {
                        if (i.message.interaction.user.id !== interaction.user.id) {
                            return;
                        }
                        try {
                            let rs = get_res();
                            //let json = await fetch(`https://www.reddit.com/r/${rs}/random/.json`).then(r => r.json());
                            let json = await fetch(`https://www.reddit.com/r/${rs}/random/.json`, {
                                method: 'GET',
                                headers: {
                                    'User-Agent': process.env.REDDIT_AGENT,
                                    'Authorization': `Bearer `
                                },
                            })
                                .then(r => r.json());
                            let permalink = json[0].data.children[0].data.permalink;
                            let posturl = `https://reddit.com${permalink}`;
                            let postimage = json[0].data.children[0].data.url;
                            let posttitle = json[0].data.children[0].data.title;
                            let postup = json[0].data.children[0].data.ups;
                            let postcomments = json[0].data.children[0].data.num_comments;

                            await i.update({
                                content: `**[${rs}] • ${posttitle}**\n👍 ${postup} | 📝 ${postcomments}\n[⠀](${postimage})`,
                                components: [row],
                                fetchReply: true
                            })
                        } catch (e) {
                            console.log(e)
                            await interaction.update({ fetchReply: true })
                        }
                    })

                    collector.on('end', async (collected, reason) => { //time out
                        if (reason === 'time') {
                            const row = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                        .setCustomId(`reddit-gonewild`)
                                        //   .setLabel("")
                                        .setEmoji('<:remoji:1152729404145930281>')
                                        .setStyle(ButtonStyle.Secondary)
                                        .setDisabled(true)
                                )

                            interaction.editReply({ components: [row] })
                        }
                    });
                } catch (e) {
                    console.log(e)

                    const apioff = new EmbedBuilder()
                        .setDescription(`something went wrong [support](${client.support}) to get support about this error`)
                        .setColor(client.color)

                    interaction.editReply({
                        embeds: [apioff],
                        //  files: [],
                        // content: "",
                        // ephemeral: true
                    })
                }
            } catch (err) {
                console.log(err);
                const support = client.support_server
                const apioff = new EmbedBuilder()
                    .setDescription(`Oops! our client is limited and cant send request to Reddit\n\n[Support Server](${client.support})`)
                    .setColor(client.color)
                interaction.editReply({
                    embeds: [apioff]
                })
            }
        }
    }
}
