const { white, red } = require('chalk');
const { WebhookClient } = require('discord.js')

module.exports = async (client, info) => {
    console.log(white(' [') + red('ERROR') + white('] ') + red('Rate Limited, Sleeping for ') + white(0) + red(' seconds'));

    const web = new WebhookClient({ url: client.er_webhook });
    web.send({
        content: `bot rate limited, sleeping for ${0} secounds`
    });
}