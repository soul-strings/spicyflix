const db = require("../settings/models/AutoFeeds")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { fikfud_requester } = require("./others/FiqFuq_requester");
require("dotenv").config();
const alertedChannelsData = require("../alertedChannels.json")
const fs = require('fs');

//this function premium
module.exports = {
    webhook_tiktok_fiqfuq_auto_requester: async function (client) {
        try {
            const webhooks = await db.find();

            await Promise.all(webhooks.map(async (webhookData) => {
                const { channelId, webhook, contenttype, guildId } = webhookData;
                const url = 'https://fiqfuq.com/api';
                const headers = {
                    'User-Agent': `${process.env.USERAGENT}`,
                };
                let group = ''
                let discover = 'tiktok'
                let a_type = 'discover'
                let rn_s = Math.floor(Math.random() * 5) + 1

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

                        await web.send({
                            content: "**🔥️ Nsfw TikTok**",
                            embeds: [embed], files: [mainf]
                        }).then(message => {
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