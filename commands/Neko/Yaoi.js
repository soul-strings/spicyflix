const { neko_yaoi } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["yaoi"],
    description: "get random yaoi porn image",
    run: async (interaction, client, user, language) => {
        await neko_yaoi(interaction, client)
    }
}
