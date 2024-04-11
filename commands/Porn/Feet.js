const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { feet_xfollow, feet_pinporn, fetish_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["feet"],
    description: "get random feet / fetish porn video",
    run: async (interaction, client, user, language) => {
        const replies = [feet_xfollow, feet_pinporn, fetish_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
