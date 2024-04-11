//main auto nude sender
const db = require("../settings/models/AutoNudeSender")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { pinporn_requester } = require("./others/pinporn_requester");
const request = require("request")
const pinporncategory = require("./others/pinporn_categories")
const randomSubreddit = pinporncategory();
require("dotenv").config();

module.exports = {
    webhook_pinporn_sender: async function (client) {

        const url = `https://pin.porn/api/videoInfo/?tag_id=${randomSubreddit.id}/&ipp=${Math.floor(Math.random() * 45) + 1}&from_page=${Math.floor(Math.random() * 20) + 1}`;
        const headers = {
            'User-Agent': process.env.pinporn_agent,
        };


        pinporn_requester(url, headers, async (error, responseData) => {
            if (error) {
                console.error('Error:', error.message);
                return;
            }
            // console.log('Response Data:', responseData);

            try {
                const webhooks = await db.find();

                const file = new AttachmentBuilder()
                    .setFile(responseData.data[0].link)
                    .setName('SpicyFlix.mp4')

                const embed = new EmbedBuilder()
                    .setDescription(responseData.data[0].title)
                    .setColor(process.env.EMBED_COLOR)


                await Promise.all(webhooks.map(async (webhookData) => {
                    const { channelId, webhook } = webhookData;

                    const web = new WebhookClient({ url: webhook });

                    try {
                        await web.send({ embeds: [embed], files: [file] }).then(message => {
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
                        console.log(`[PINPORN] sended in guilds !`);
                    } catch (error) {
                        console.error(`[PINPORN] error cant send:`, error);
                        // const webhooklogger = new WebhookClient({ url: client.logger })
                        //   webhooklogger.send({
                        //      content: `${error}`
                        // })
                    }

                }));
            } catch (e) {
                console.log(e)
            }
        });
    }

}