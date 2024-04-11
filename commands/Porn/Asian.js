const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { asian_hotscop, asian_pinporn, asian_fiqfuq, asian_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["asian"],
    description: "get random asian porn video",
    run: async (interaction, client, user, language) => {
        const replies = [asian_hotscop, asian_pinporn, asian_fiqfuq, asian_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
