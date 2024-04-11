const mongoose = require('mongoose');

const Spicynude = new mongoose.Schema({
    guildId: String,
    channelId: String,
    webhook: String,
});

module.exports = mongoose.model('Spicynude', Spicynude);