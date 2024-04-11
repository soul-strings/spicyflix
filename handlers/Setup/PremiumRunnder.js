const Premium = require('../../settings/models/Premium.js');
const Profile = require("../../settings/models/Redeem.js")

const gPremium = require('../../settings/models/GPremium.js');
const gProfile = require("../../settings/models/GRedeem.js")
module.exports = async (client) => {
    client.createPremium = async function (interaction, user) {
        const findUser = await Premium.findOne({ Id: interaction.user.id });
        if (!findUser) {
            const newUser = await Premium.create({
                Id: interaction.user.id
            });
            await newUser.save();

            interaction.client.premiums.set(interaction.user.id, newUser);
        }
    }

    client.CreateGuildPremium = async function (interaction, user) {
        const findUser = await gPremium.findOne({ Id: interaction.guild.id });
        if (!findUser) {
            const newUser = await gPremium.create({
                Id: interaction.guild.id
            });
            await newUser.save();

            interaction.client.premiums.set(interaction.guild.id, newUser);
        }
    }

    client.createDatabase = async function (interaction) {
        const CProfile = await Profile.findOne({ userId: interaction.user.id });
        if (!CProfile) {
            const newUser = await Profile.create({
                userId: interaction.user.id,
            });
            await newUser.save();
        }
    }

    client.interval = null;

    client.clearInterval = async function (interval) {
        clearInterval(interval);
    }
}