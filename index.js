const MainClient = require("./spicy-flix.js");
const client = new MainClient();

client.connect()
    .then(() => {
        console.log(`Logged in as ${client.user.tag}!...`);
        console.log(`Total shards: ${client.count} | id: ${client.id}`);
    })
    .catch(console.error);

module.exports = client;
