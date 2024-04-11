const mongoose = require('mongoose');

const Feeds = new mongoose.Schema({
    guildId: String,
    channelId: String,
    webhook: String,
    contenttype: String,
});

module.exports = mongoose.model('autofeed', Feeds);