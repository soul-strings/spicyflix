const { neko_paizuri } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["paizuri"],
    description: "get random paizuri porn image",
    run: async (interaction, client, user, language) => {
        await neko_paizuri(interaction, client)
    }
}
