const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { eboy_pinporn } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["eboy"],
    description: "get random eboy porn video",
    run: async (interaction, client, user, language) => {
        const replies = [eboy_pinporn];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
