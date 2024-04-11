const { white, yellow } = require("chalk");
const { WebhookClient } = require('discord.js')

module.exports = async (client, id) => {
    console.log(white('[') + yellow('WARN') + white('] ') + yellow('Shard ') + white(id) + yellow(' Shard Resumed!'));

    const web = new WebhookClient({ url: client.er_webhook });
    web.send({
        content: `Shard with id ${id} resumed`
    });
}