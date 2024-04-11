const db = require("../settings/models/AutoFeeds")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { request_site } = require("./others/one_requester");
require("dotenv").config();
const alertedChannelsData = require("../alertedChannels.json")
const fs = require('fs');

//this function is premium
module.exports = {
    premium_webhook_auto_xfollow_sender: async function (client) {
        try {
            const webhooks = await db.find();

            await Promise.all(webhooks.map(async (webhookData) => {
                const { channelId, webhook, contenttype, guildId } = webhookData;
                const gotguild = await client.guilds.fetch(guildId)
                const guildss = client.premiums.get(gotguild.id)
                if (guildss && guildss.isPremium) {

                    const randomNumber = Math.floor(Math.random() * 23) + 1;
                    const page = Math.floor(Math.random() * 12) + 1;

                    const url = `https://www.xfollow.com/api/v1/post/tag/${contenttype}?genders=cf&limit=${randomNumber}&page=${page}`
                    const headers = {
                        'User-Agent': `${process.env.USERAGENT}`,
                    }

                    request_site(url, headers, async (error, responseData) => {
                        if (error) {
                            console.error('Error:', error.message);
                            return;
                        }

                        const MapTheAPi = Math.floor(Math.random() * responseData.length);
                        const ranfile = responseData[MapTheAPi].post.media[0].url;


                        const channel = await client.channels.fetch(channelId);
                        const web = new WebhookClient({ url: webhook });

                        try {
                            const files = new AttachmentBuilder(ranfile, 'SpicyFlix.mp4')

                            const embed = new EmbedBuilder()
                                .setDescription(responseData[MapTheAPi].post.text || "don't have description")
                                .setColor(client.color)

                            await web.send({ embeds: [embed], files: [files] }).then(message => {
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
                            console.log(`[PREMIUM XFOLLOW] sended in ${channel.id} (${channel.name})`);
                        } catch (error) {
                            console.error(`[PREMIUM XFOLLOW] error cant send in ${channel.name}:`, error);
                            const webhooklogger = new WebhookClient({ url: client.logger })
                            //   webhooklogger.send({
                            //      content: `${error}`
                            // })
                        }
                    })
                } else {
                    const ch = await client.channels.fetch(channelId)
                    if (alertedChannelsData.alertedChannels.includes(ch.id)) {
                        console.log('we have sended alert already')
                    } else {
                        // Send the alert message
                        const embed = new EmbedBuilder()
                            .setTitle("Your premium subscription has expired")
                            .setColor(client.color)
                            .setImage(client.image)
                            .setDescription(`Premium features are currently disabled. To renew premium status and regain access to premium features, please join our [support server](${client.support})`)
                        ch.send({ embeds: [embed] })


                        alertedChannelsData.alertedChannels.push(ch.id);
                        fs.writeFileSync('./alertedChannels.json', JSON.stringify(alertedChannelsData, null, 2));
                    }
                }
            }));
        } catch (e) {
            console.log(e)
        }
    }
}