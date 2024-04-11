const db = require("../settings/models/AutoNudeSender")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { onlytik_requester } = require("./others/onlytik_requester");
const request = require("request")
require("dotenv").config();

module.exports = {
    webhook_onlytik_sender: async function (client) {

        const url = `https://onlytik.com/api/new-videos`;
        const headers = {
            'User-Agent': process.env.G_AGENT,
        };


        onlytik_requester(url, headers, async (error, responseData) => {
            if (error) {
                console.error('Error:', error.message);
                return;
            }
            try {
                const webhooks = await db.find();

                const file = new AttachmentBuilder()
                    .setFile(responseData[Math.floor(Math.random() * responseData.length)].url)
                    .setName('SpicyFlix.mp4')


                await Promise.all(webhooks.map(async (webhookData) => {
                    const { channelId, webhook } = webhookData;

                    const web = new WebhookClient({ url: webhook });

                    try {
                        await web.send({ files: [file] }).then(message => {
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
                        console.log(`[ONLYTIK] sended in guilds !`);
                    } catch (error) {
                        console.error(`[ONLYTIK] error cant send:`, error);
                        // const webhooklogger = new WebhookClient({ url: client.logger })
                        //   webhooklogger.send({
                        //      content: `${error}`
                        // })
                    }

                }))
            } catch (e) {
                console.log(e)
            }
        });
    }

}