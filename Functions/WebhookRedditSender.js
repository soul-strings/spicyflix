const db = require("../settings/models/AutoWebhookSender")
const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ChannelType, WebhookClient } = require("discord.js");
const getRandomSubreddit = require('./others/randomsub');
module.exports = {
    webhook_reddit_sender: async function (client) {
        let randomSubreddit = getRandomSubreddit();

        let json = await fetch(`https://www.reddit.com/r/${randomSubreddit}/random/.json`, {
            method: 'GET',
            headers: {
                'User-Agent': process.env.G_AGENT,
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

        try {


            const webhooks = await db.find();

            await Promise.all(webhooks.map(async (webhookData) => {
                const { guildId, channelId, webhook } = webhookData;

                const channel = await client.channels.fetch(channelId);
                const web = new WebhookClient({ url: webhook });

                try {
                    await web.send({ content: `${randomSubreddit} • ${posttitle}\n👍 ${postup} | 📝 ${postcomments}\n${client.spoiler}${postimage}` })
                    console.log(`[Auto Reddit] sended in ${channel.id} (${channel.name})`);
                } catch (error) {
                    console.error(`[Auto Reddit] error cant send in ${webhook} | ${channel.name}:`, error);

                    await db.findOneAndDelete({
                        guildId: guildId,
                    });

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