const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { homemade_hotscop, homemade_pinporn, homemade_fiqfuq } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["homemade"],
    description: "get random homemade porn",
    run: async (interaction, client, user, language) => {
        const replies = [homemade_hotscop, homemade_pinporn, homemade_fiqfuq];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
