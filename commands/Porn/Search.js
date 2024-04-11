const { EmbedBuilder, ActionRowBuilder, ApplicationCommandOptionType, SelectMenuBuilder, SelectMenuOptionBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { pornhub_searcher } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["search"],
    description: "search porn videos on pornhub",
    options: [
        {
            name: "search",
            description: "what type of video do you want to search ?",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (interaction, client, user, language) => {
        const searcherstring = interaction.options.getString("search");
        const replies = [pornhub_searcher];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        await reply(interaction, client, searcherstring);
    }
}
