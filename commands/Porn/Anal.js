const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { anal_hotscop, anal_pinporn, anal_fiqfuq } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["anal"],
    description: "get random anal porn video",
    run: async (interaction, client, user, language) => {
        const replies = [anal_hotscop, anal_pinporn, anal_fiqfuq];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
