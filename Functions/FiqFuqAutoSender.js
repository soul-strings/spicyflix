const db = require("../settings/models/AutoNudeSender")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { fikfud_requester } = require("./others/FiqFuq_requester");
require("dotenv").config();

module.exports = {
    webhook_fiqfuq_auto_requester: async function (client) {
        //check thi site if you want add more responses here
        const g1 = ['breastsucking', 'CollegeAmateurs', 'alteredbuttholes', 'IndianFetish']
        const g2 = ['aa_cups', 'SchoolgirlsXXX', 'THEGOLDSTANDARD', 'blowjobsandwich',]
        const g3 = ['FacialFun', 'stripgirls', 'IndianPorn', 'facesitting']
        const g4 = ['wifewantstoplay', 'slutsofsnapchat', 'slingbikini', 'naughtywives']
        const g5 = ['homesex', 'fitgirls', 'TitfuckBlowjob', 'FrogButt']
        const g6 = ['collegesluts', 'fingerinbutt', 'Orgasms', 'Kyutty']
        const g7 = ['B_Cups', 'lactation', 'AmateurDeepthroat', 'femdomgonewild']
        const g8 = ['WedgieGirls', 'FanslyFriends', 'petite', 'AnnaBellPeaks']
        const g9 = ['pelfie', 'Gonewild18', 'asstastic', 'fingerinbutt']
        const g10 = ['WedgieGirls', 'FanslyFriends', 'petite', 'AnnaBellPeaks']
        const g11 = ['amateur_threesomes', 'TheUnderbun', 'justthejewels', 'vagina']
        const g12 = ['bimbocumsluts', 'PerfectPussies', 'fuckdoll', 'collegesluts']

        const groups = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
        const ri = Math.floor(Math.random() * groups.length);
        let a = groups[ri];
        let b = a.join(',');
        try {
            const webhooks = await db.find();

            await Promise.all(webhooks.map(async (webhookData) => {
                const { channelId, webhook, contenttype, guildId } = webhookData;
                const url = 'https://fiqfuq.com/api';
                const headers = {
                    'User-Agent': `${process.env.USERAGENT}`,
                };
                let group = b
                let discover = 0
                let a_type = 'homepage'
                let rn_s = Math.floor(Math.random() * 10) + 1

                fikfud_requester(url, group, discover, a_type, rn_s, headers, async (error, responseData) => {
                    if (error) {
                        console.error('Error:', error.message);
                        return;
                    }

                    const channel = await client.channels.fetch(channelId);
                    const web = new WebhookClient({ url: webhook });

                    try {
                        const ran = Math.floor(Math.random() * responseData.length)
                        const mainf = new AttachmentBuilder(responseData[ran].video_url, 'SpicyFlix.mp4')

                        const embed = new EmbedBuilder()
                            .setDescription(`${responseData[ran].description ?? "none"}`)
                            .setColor(client.color)

                        await web.send({ embeds: [embed], files: [mainf] }).then(message => {
                            const attachmentLinks = message.attachments.map(attachment => attachment.url);
                            console.log("Attachment Links:", attachmentLinks);
                            const urlObject = new URL(attachmentLinks);
                            const baseURL = urlObject.origin + urlObject.pathname;
                            const emojis = ["😈", "🌶️", "❤️", "🔥"];
                            const re = emojis[Math.floor(Math.random() * emojis.length)];
                            const btns = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                        .setLabel("Download")
                                        .setURL(baseURL)
                                        .setEmoji(`${re}`)
                                        .setStyle(ButtonStyle.Link));

                            web.send({ components: [btns] })
                        })
                            .catch(error => {
                                console.error("Error sending message:", error);
                            });
                        console.log(`[FIQFUQ] sended in ${channel.id} (${channel.name})`);
                    } catch (error) {
                        console.error(`[FIQFUQ] error cant send in ${channel.name}:`, error);
                        const webhooklogger = new WebhookClient({ url: client.logger })
                        //   webhooklogger.send({
                        //      content: `${error}`
                        // })
                    }
                })
            }));
        } catch (e) {
            console.log(e)
        }
    }
}