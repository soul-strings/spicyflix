const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { boobs_hotscop, boobs_pinporn, boobs_fiqfuq, boobs_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["boobs"],
    description: "get random boobs porn video",
    run: async (interaction, client, user, language) => {
        const replies = [boobs_hotscop, boobs_pinporn, boobs_fiqfuq, boobs_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
