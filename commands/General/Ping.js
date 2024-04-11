const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require("discord.js");
const { request } = require("http");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: ["ping"],
    description: "check bot ping",
    run: async (interaction, client) => {
        const embed = new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`websocket latency: ${client.ws.ping}ms\ninteraction latency: ${Date.now() - interaction.createdTimestamp}ms`)

        interaction.reply({ embeds: [embed] });
    }
}
