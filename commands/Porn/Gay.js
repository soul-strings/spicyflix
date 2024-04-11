const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { gay_pinporn, gay_fiqfuq, gay_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["gay"],
    description: "get random gay porn video",
    run: async (interaction, client, user, language) => {
        const replies = [gay_pinporn, gay_fiqfuq, gay_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
