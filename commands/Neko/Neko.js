const { neko_nekoa } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["neko"],
    description: "get random neko porn image",
    run: async (interaction, client, user, language) => {
        await neko_nekoa(interaction, client)
    }
}
