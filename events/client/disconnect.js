const { white, yellow } = require('chalk');
const { WebhookClient } = require('discord.js')

module.exports = async (client) => {
    console.log(white('[') + yellow('WARN') + white('] ') + yellow('Disconnected ') + white(`${client.user.tag} (${client.user.id})`) + yellow(' '));

    const web = new WebhookClient({ url: client.er_webhook });
    web.send({
        content: `${client.user.tag} disconnected`
    });
};
