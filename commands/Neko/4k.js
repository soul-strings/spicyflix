const { neko_4k } = require("../../Functions/porn_cmd/requester")

module.exports = {
    name: ["4k"],
    description: "get random 4k porn image",
    run: async (interaction, client, user, language) => {
        await neko_4k(interaction, client)
    }
}
