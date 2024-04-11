const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { lesbian_hotscop, lesbian_pinporn, lesbian_fiqfuq } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["lesbian"],
    description: "get random lesbian porn",
    run: async (interaction, client, user, language) => {
        const replies = [lesbian_hotscop, lesbian_pinporn, lesbian_fiqfuq];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
