const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { onlyfans_hotscop, onlyfans_pinporn, onlyfans_fiqfuq, onlyfans_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["onlyfans"],
    description: "get random onlyfans porn",
    run: async (interaction, client, user, language) => {
        const replies = [onlyfans_hotscop, onlyfans_pinporn, onlyfans_fiqfuq, onlyfans_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
