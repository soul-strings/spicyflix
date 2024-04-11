const { white, green } = require("chalk");
const { ShardingManager, EmbedBuilder, WebhookClient } = require('discord.js'); //imports the sharding manager
require("dotenv").config();

const web = new WebhookClient({ url: process.env.SHARDS_READY_WEBHOOK });
const erweb = new WebhookClient({ url: process.env.ER_WEBHOOK });

module.exports = async (client, id) => {
    console.log(white('[') + green('INFO') + white('] ') + green('Shard ') + white(id) + green(' Shard Ready!!!'));
    let embed = new EmbedBuilder()
        .setTitle(`Shard Lunching`)
        .setDescription(`ok, our shard are lunching...`)
        .setFields([
            {
                name: "Shard ID",
                value: `${id + 1}`,
                inline: true
            },
        ])
        .setColor("Green");

    web.send({
        embeds: [embed]
    })
}