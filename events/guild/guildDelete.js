const moment = require('moment');
require("dotenv").config();
const { red } = require("chalk")
const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle, WebhookClient } = require("discord.js");
module.exports = async (client, guild) => {
    console.log(red(`The bot has been removed to a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members.`));
    const logWebhook = new WebhookClient({ url: process.env.GUILD_LOGS })

    const embed = {
        title: 'SpicyFlix Removed',
        description: `Removed from **${guild.name}!**`,
        thumbnail: {
            url: guild.iconURL(),
        },
        fields: [
            {
                name: 'Guild Name',
                value: `${guild.name}`,
                inline: true,
            },
            {
                name: 'Date',
                value: `<t:${Math.round(guild.createdAt / 1000)}>`,
                inline: true,
            },
            {
                name: 'Guild ID',
                value: `${guild.id}`,
                inline: true,
            },
            {
                name: 'Creating Date',
                value: `${moment.utc(guild.createdAt).format('DD/MMM/YYYY')}`,
                inline: true,
            },
            {
                name: 'Members',
                value: `${guild.memberCount}`,
                inline: true,
            },
        ],
        footer: {
            text: `Guild #${client.guilds.cache.size}`,
        },
        color: 0xfe875d
    };

    // Send the message to the log channel
    logWebhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL(),
        embeds: [embed],
    });
}