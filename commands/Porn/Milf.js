const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { milf_hotscop, milf_pinporn, milf_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["milf"],
    description: "get random milf porn",
    run: async (interaction, client, user, language) => {
        const replies = [milf_hotscop, milf_pinporn, milf_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
