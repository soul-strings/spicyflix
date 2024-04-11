const mongoose = require('mongoose')

const Create = mongoose.Schema({
    userId: String,
})
module.exports = mongoose.model('Profiles', Create)