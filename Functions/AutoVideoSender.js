//main auto nude sender
const db = require("../settings/models/AutoNudeSender")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { request_site } = require("./others/one_requester");
const request = require("request")
require("dotenv").config();

module.exports = {
    webhook_video_sender: async function (client) {

        const url = `https://api.hotscope.tv/videos/sort?sort=-date&page=${Math.floor(Math.random() * 20) + 1}`;
        const headers = {
            'User-Agent': process.env.HOTSCOPE_AGENT,
        };

        request_site(url, headers, async (error, responseData) => {
            if (error) {
                console.error('Error:', error.message);
                return;
            }

            const ri = Math.floor(Math.random() * responseData.length);
            const randomId = responseData[ri].id;
            //   console.log(randomId)

            const new_url = `https://api.hotscope.tv/videos/video/${randomId}`;
            const new_headers = {
                'User-Agent': process.env.HOTSCOPE_AGENT,

            };

            const new_options = {
                json: true,
                jsonReplacer: true,
                url: new_url,
                headers: new_headers
            };

            request(new_options, async (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    // console.log(body.video)
                    try {
                        const webhooks = await db.find();

                        const file = new AttachmentBuilder()
                            .setFile(body.video)
                            .setName("SpicyFlix.mp4")

                        const embed = new EmbedBuilder()
                            .setDescription(`${body.title}`)
                            .setColor("ca2c2b")


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
                                console.log(`[Auto Video] sended in guilds !`);
                            } catch (error) {
                                console.error(`[Auto Video] error cant send:`, error);
                                // const webhooklogger = new WebhookClient({ url: client.logger })
                                //   webhooklogger.send({
                                //      content: `${error}`
                                // })
                            }

                        }));
                    } catch (e) {
                        console.log(e)
                    }

                } else {
                    console.error('Error:', error);
                    console.log('Response status code:', response.statusCode);
                }
            });


        });
    }

}