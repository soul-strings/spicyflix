const db = require("../settings/models/AutoNudeSender")
const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ChannelType, WebhookClient } = require("discord.js");
var { video } = require('../videos.json')

//this function is free
module.exports = {
    webhook_saved_sender: async function (client) {
        var content = `${video[Math.floor(Math.random() * video.length)]}`

        try {
            const webhooks = await db.find();

            await Promise.all(webhooks.map(async (webhookData) => {
                const { channelId, webhook } = webhookData;

                const channel = await client.channels.fetch(channelId);
                const web = new WebhookClient({ url: webhook });

                try {
                    await web.send({ content: `**Random Content**[⠀](${content})` })
                    console.log(`[Auto Video saved] sended in ${channel.id} (${channel.name})`);
                } catch (error) {
                    console.error(`[Auto Video saved] error cant send in ${channel.name}:`, error);
                    const webhooklogger = new WebhookClient({ url: client.logger })
                    //   webhooklogger.send({
                    //      content: `${error}`
                    // })
                }

            }));
        } catch (e) {
            console.log(e)
        }
    }
}