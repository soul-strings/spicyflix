const db = require("../settings/models/AutoFeeds")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { pikped_requester } = require("./others/pikped_requester");
require("dotenv").config();
const alertedChannelsData = require("../alertedChannels.json")
const fs = require('fs');

//this function is premium
module.exports = {
    webhook_auto_feed_sender: async function (client) {
        try {
            const webhooks = await db.find();

            await Promise.all(webhooks.map(async (webhookData) => {
                const { channelId, webhook, contenttype, guildId } = webhookData;
                const gotguild = await client.guilds.fetch(guildId)
                const guildss = client.premiums.get(gotguild.id)

                if (guildss && guildss.isPremium) {
                    //use specific content type that setted for each guild
                    // console.log(contenttype)
                    let ran = Math.floor(Math.random() * 11) + 1
                    const url = `https://api.pikped.com/api/tagList?page_size=10&page=${ran}&tags=${contenttype}`
                    const headers = {
                        "Accept": "*/*",
                        "Accept-Encoding": "deflate",
                        "Accept-Language": "en-US,en;q=0.5",
                        "Connection": "keep-alive",
                        "Host": "api.pikped.com",
                        "Origin": "https://www.pikped.com",
                        "Referer": "https://www.pikped.com/",
                        "Sec-Fetch-Dest": "empty",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Site": "same-site",
                        "TE": "trailers",
                        "User-Agent": client.pikped_useragent,
                        "User-Identify": "null"
                    }


                    pikped_requester(url, headers, async (error, responseData) => {
                        if (error) {
                            console.error('Error:', error.message);
                            return;
                        }

                        const ri = Math.floor(Math.random() * responseData.data.contents.length);
                        const randomUsername = responseData.data.contents[ri];
                        // console.log(randomUsername)


                        const channel = await client.channels.fetch(channelId);
                        const web = new WebhookClient({ url: webhook });

                        try {

                            const mainf = new AttachmentBuilder()
                                .setFile(randomUsername.hd)
                                .setName('SpicyFlix.mp4')

                            const embed = new EmbedBuilder()
                                .setDescription(randomUsername.description ?? "dont have")
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
                            console.log(`[PREMIUM PIKPED] sended in ${channel.id} (${channel.name})`);
                        } catch (error) {
                            console.error(`[PREMIUM PIKPED] error cant send in ${channel.name}:`, error);
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