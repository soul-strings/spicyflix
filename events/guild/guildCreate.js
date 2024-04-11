const moment = require('moment');
const { green } = require('chalk')
require("dotenv").config();
const { EmbedBuilder, ApplicationCommandOptionType, WebhookClient, PermissionsBitField, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = async (client, guild) => {
    console.log(green(`The bot has been added to a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members.`));
    const logWebhook = new WebhookClient({ url: process.env.GUILD_LOGS })
    const guilds = await client.guilds.cache.size
    const totalG = guilds
    const guildOwner = await guild.fetchOwner();
    const embed = {
        title: 'SpicyFlix Added',
        description: `**Thanks for inviting me to ${guild.name}**!`,
        thumbnail: {
            url: guild.iconURL(),
        },
        fields: [
            {
                name: 'Guild Owner',
                value: `${guildOwner.user.tag} [\`${guild.ownerId}\`]`,
                inline: true,
            },
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
            text: `Guild #${totalG}`,
        },
        color: 0xfe875d
    };

    // Send the message to the log channel
    logWebhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL(),
        embeds: [embed],
    });

    // Send a DM to the guild owner
    const ownerDM = await guildOwner.user.createDM();
    const bemola = new EmbedBuilder()
        .setTitle(`:wave: ${guildOwner.user.tag} thanks for invite SpicyFlix to your server`)
        .setDescription(`you can join my official support server to get **4k content 🫦, fresh 😈, top-quality 1080 / 720 videos of nature and many more 🍑 every day whcih we update in server**`)
        .setColor(client.color)
    await ownerDM.send({
        content: `Turning up the heat with sizzling adult content! 🔥🌶️ Join the fiery fun now! ${client.support}\nOur Community ${client.main_support}`,
        embeds: [bemola]
    });
};