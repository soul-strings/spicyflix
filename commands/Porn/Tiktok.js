const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { tiktok_figfat, tiktok_hotscop, tiktok_onlytik, tiktok_xfollow, tiktok_pinporn, tiktok_tikporn, tiktok_tube,
    tiktok_fiqfuq, tiktok_fikfap } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["tiktok"],
    description: "get random tiktok nsfw video",
    run: async (interaction, client, user, language) => {
        const replies = [tiktok_xfollow, tiktok_figfat, tiktok_hotscop, tiktok_onlytik, tiktok_fiqfuq, tiktok_pinporn, tiktok_tikporn, tiktok_tube, tiktok_fikfap];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client);
    }
}
