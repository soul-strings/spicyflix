const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { porn_hotscop, porn_pinporn, porn_saved, porn_fiqfuq, porn_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["porn"],
    description: "get random porn video",
    run: async (interaction, client, user, language) => {
        try {
            const replies = [porn_hotscop, porn_pinporn, porn_saved, porn_fiqfuq, porn_xfollow];
            const reply = replies[Math.floor(Math.random() * replies.length)];
            await reply(interaction, client);
        } catch (e) {
            interaction.editReply({ content: "content was too big to upload! just use another one" })
        }
    }
}
