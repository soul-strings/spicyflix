const { green, white } = require('chalk');
const Premium = require("../../settings/models/Premium")
const gPremium = require("../../settings/models/GPremium")
const { functions_runner } = require("../../Functions/others/Functionsrunner.js")
const { webhook_fiqfuq_auto_requester } = require("../../Functions/FiqFuqAutoSender.js")
const { webhook_reddit_sender } = require("../../Functions/WebhookRedditSender.js") //reddit
const { webhook_video_sender } = require("../../Functions/AutoVideoSender.js") // video
const { webhook_pinporn_sender } = require("../../Functions/PinPornSender.js") // video 2
const { webhook_saved_sender } = require("../../Functions/AutoRandomSavedSender.js") //saved video
const { webhook_onlytik_sender } = require("../../Functions/OnlyTikApi.js") //onlytik
const { webhook_auto_feed_sender } = require("../../Functions/AutoFeedsSender.js")//premium
const { webhook_tiktok_fiqfuq_auto_requester } = require("../../Functions/Tiktok_f_auto.js")//prmium
const { webhook_leftandright_reddit_sender } = require("../../Functions/LeftandRightSender.js") //left and right premium
const { webhook_tiktok_waptap } = require("../../Functions/waptap_tiktok_sender.js") //free tiktok
const { premium_webhook_auto_xfollow_sender } = require("../../Functions/PremiumXfollowPoster.js") //premium
const { botlistme_requester } = require("../../Functions/BotLists/botlist.me.js") //bot list: botlist.me
//
const BotlistMeClient = require('botlist.me.js');
//

const { botlistme_hasvoted } = require("../../Functions/BotLists/hasvoted.botlist.me.js")
//doc: https://crontab.guru/examples.html
require("dotenv").config();
const { EmbedBuilder, PermissionsBitField, WebhookClient } = require("discord.js")
var cron = require('node-cron');

module.exports = async (client) => {
    console.log(white('[') + green('SpaceFlix') + white('] ') + green(`${client.guilds.cache.size}`) + white(` Guilds`));
    console.log(white('[') + green('INFO') + white('] ') + green(`${client.user.tag} (${client.user.id})`) + white(` is Ready!`));


    //update guild and users premium
    const users = await Premium.find();
    for (let user of users) {
        client.premiums.set(user.Id, user);
    }

    const guildss = await gPremium.find();
    for (let user of guildss) {
        client.premiums.set(user.Id, user);
    }



    const functions = [ //free functions
        webhook_video_sender,
        webhook_pinporn_sender,
        webhook_saved_sender,
        webhook_fiqfuq_auto_requester,
        webhook_tiktok_waptap,
        webhook_onlytik_sender
    ];

    const pref = [ //premium functions
        webhook_tiktok_fiqfuq_auto_requester,
        webhook_auto_feed_sender,
        premium_webhook_auto_xfollow_sender
    ]
    cron.schedule('*/15 * * * *', async () => {
        const randomFunction = functions_runner(functions);
        randomFunction(client);
    })

    cron.schedule('0 * * * *', async () => {
        const rf = functions_runner(pref);
        rf(client);
    })//premium random functions

    cron.schedule('*/3 * * * *', async () => {
        webhook_reddit_sender(client)
    })

    cron.schedule('0 * * * *', async () => {
        webhook_leftandright_reddit_sender(client)
    })//premium reddit

    setInterval(() => {
        //   `/help | ${client.guilds.cache.size} Guilds`,
        const activities = [
            `/help | ${client.guilds.cache.size} Guilds`,
            `/tiktok | ${client.guilds.cache.size} Guilds`,
            `/reddit | ${client.guilds.cache.size} Guilds`,
            `Turning up the heat with sizzling adult content! 🔥🌶️ Join the fiery fun now!`
        ]
        client.user.setPresence({
            activities: [{ name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 0 }],
            status: 'online',
        });
    }, 5 * 1000 * 60)

    if (process.env.BOLISTME) {
        cron.schedule('0 */3 * * *', async () => {
            try {
                botlistme_requester(client.guilds.cache.size, client.count, client.user.id,
                    async (error, responseData, response) => {
                        if (!error | response.statusCode === 200) {
                            console.log("updated to botlist.me", response.body)
                            const web = new WebhookClient({ url: client.botlistlog });
                            web.send({
                                content: `BotList: botlist.me posted status (${response.statusCode})`
                            });
                        } else {
                            const web = new WebhookClient({ url: client.er_webhook });
                            web.send({
                                content: `BotList: botlist.me | ${error}`
                            });
                        }
                    })
            } catch (er) {
                console.log(er)
                const web = new WebhookClient({ url: client.er_webhook });
                web.send({
                    content: `BotList: botlist.me | ${er}`
                });
            }
        })
        const botlistme = new BotlistMeClient(process.env.BOTLISTMETOKEN, { webhookPort: 3000, webhookAuth: 'Jende@123' });

        botlistme.webhook.on('ready', hook => {
            console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
        });

        //running the shit
        botlistme.webhook.on('vote', vote => {
            console.log(`User ${vote.user} just voted!`);
        });
    }
};
