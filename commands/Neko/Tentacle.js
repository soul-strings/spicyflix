const { neko_tentacle } = require("../../Functions/porn_cmd/requester")
module.exports = {
    name: ["tentacle"],
    description: "get random tentacle porn image",
    run: async (interaction, client, user, language) => {
        await neko_tentacle(interaction, client)
    }
}
