//free auto tiktok (waptap) sender
const db = require("../settings/models/AutoNudeSender")
const { EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, ChannelType, WebhookClient, AttachmentBuilder } = require("discord.js");
const { request_site } = require("./others/one_requester");
const ranwaptappers = require("./others/waptap_tiktok_categories")
const rangot = ranwaptappers();
require("dotenv").config();

module.exports = {
    webhook_tiktok_waptap: async function (client) {
        //check waptap to have more changes here if you need
        let ran = Math.floor(Math.random() * 4) + 1
        const url = `https://api1.waptap.com/v1/user/${rangot.name}/media?page=${ran}`;
        const headers = {
            'Accept': "*/*",
            'Accept-Encoding': 'deflate',
            'Accept-Language': 'en-US,en;q=0.5',
            'Alt-Used': 'api1.waptap.com',
            'Connection': 'keep-alive',
            'Cookie': client.waptap_cookie,
            'Host': 'api1.waptap.com',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': process.env.WAPTAP_AGENT,
        };

        request_site(url, headers, async (error, responseData) => {
            if (error) {
                console.error('Error:', error.message);
                return;
            }

            const ri = Math.floor(Math.random() * responseData.data.items.length);
            const ranres = responseData.data.items[ri];

            try {
                const webhooks = await db.find();

                const file = new AttachmentBuilder()
                if (ranres.file.endsWith(".mp4")) {
                    file.setFile(ranres.file)
                        .setName("SpicyFlix.mp4");
                } else {
                    file.setFile(ranres.file)
                        .setName("SpicyFlix.png");
                }

                const embed = new EmbedBuilder()
                    .setDescription(`${ranres.description} || "none"`)
                    .setColor(client.color)


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
                        console.log(`[WAPTAP TIKTOK] sended in guilds !`);
                    } catch (error) {
                        console.error(`[WAPTAP TIKTOK] error cant send:`, error);
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