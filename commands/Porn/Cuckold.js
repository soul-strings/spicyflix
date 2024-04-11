const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { cuckold_pinporn, cuckold_fiqfuq, cuckold_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["cuckold"],
    description: "get random cuckold porn video",
    run: async (interaction, client, user, language) => {
        const replies = [cuckold_pinporn, cuckold_fiqfuq, cuckold_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
