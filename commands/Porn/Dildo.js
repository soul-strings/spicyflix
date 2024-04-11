const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { dildo_pinporn, dildo_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["dildo"],
    description: "get random dildo porn video",
    run: async (interaction, client, user, language) => {
        const replies = [dildo_pinporn, dildo_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
