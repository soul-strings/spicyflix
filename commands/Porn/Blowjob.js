const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { blowjob_fiqfuq, blowjob_pinporn, blowjob_xfollow } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["blowjob"],
    description: "get random blowjob porn",
    run: async (interaction, client, user, language) => {
        const replies = [blowjob_fiqfuq, blowjob_pinporn, blowjob_xfollow];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
