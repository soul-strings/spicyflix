const db = require("../settings/models/AutoLeftRight")
const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ChannelType, WebhookClient } = require("discord.js");
const alertedChannelsData = require("../alertedChannels.json")
const fs = require('fs');

//this function is premium
module.exports = {
    webhook_leftandright_reddit_sender: async function (client) {
        let randomSubreddit = 'Ifyouhadtopickone';
        let json = await fetch(`https://www.reddit.com/r/${randomSubreddit}/random/.json`, {
            method: 'GET',
            headers: {
                'User-Agent': process.env.G_AGENT,
                'Authorization': `Bearer `// i think reddit shit down some times so i add this
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
                const { channelId, webhook, guildId } = webhookData;
                const gotguild = await client.guilds.fetch(guildId)
                const guildss = client.premiums.get(gotguild.id)

                if (guildss && guildss.isPremium) {

                    const channel = await client.channels.fetch(channelId);
                    const web = new WebhookClient({ url: webhook });
                    try {
                        //use a shit spoiler to cover images or files
                        const message = await web.send({ content: `${client.spoiler}${postimage}` }).then(async sendedmessage => {
                            const targetChannel = channel
                            await targetChannel.messages.fetch({ message: sendedmessage.id }).then((r) => {
                                try {
                                    const lemoji = '👈';
                                    const remoji = '👉';
                                    const icant = '🥵';

                                    r.react(lemoji)
                                    r.react(remoji)
                                    r.react(icant)
                                    r.react("❤️")
                                } catch (e) { console.log(`cant add reaction to some channel with id ${sendedmessage.id} and channel id :${targetChannel} er was ${e}`) }
                            })
                        })
                        console.log(`[Auto Left right Reddit] sended in ${channel.id} (${channel.name})`);
                    } catch (error) {
                        console.error(`[Auto  left right Reddit] error cant send in ${channel.name}:`, error);
                        const webhooklogger = new WebhookClient({ url: client.logger })
                        //   webhooklogger.send({
                        //      content: `${error}`
                        // })
                    }
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