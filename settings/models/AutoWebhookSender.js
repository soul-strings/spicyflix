const mongoose = require('mongoose');

const Spicyautowebhook = new mongoose.Schema({
    guildId: String,
    channelId: String,
    webhook: String,
});

module.exports = mongoose.model('Spicyautowebhook', Spicyautowebhook);