const { PermissionsBitField, WebhookClient } = require("discord.js");
const chalk = require('chalk');
const Premium = require("../../settings/models/Premium")

module.exports = async (client, interaction) => {

  if (interaction.isCommand || interaction.isContextMenuCommand || interaction.isModalSubmit || interaction.isChatInputCommand) {
    if (!interaction.guild) return;

    await client.createDatabase(interaction);

    const user = interaction.client.premiums.get(interaction.user.id);
    await client.createPremium(interaction, user);

    const guildss = interaction.client.premiums.get(interaction.guild.id);
    await client.CreateGuildPremium(interaction, guildss)

    let subCommandName = "";
    try {
      subCommandName = interaction.options.getSubcommand();
    } catch { };
    let subCommandGroupName = "";
    try {
      subCommandGroupName = interaction.options.getSubcommandGroup();
    } catch { };

    const command = client.slash.find(command => {
      switch (command.name.length) {
        case 1: return command.name[0] == interaction.commandName;
        case 2: return command.name[0] == interaction.commandName && command.name[1] == subCommandName;
        case 3: return command.name[0] == interaction.commandName && command.name[1] == subCommandGroupName && command.name[2] == subCommandName;
      }
    });

    if (!command) return;


    const msg_cmd = [
      `[COMMAND] ${command.name[0]}`,
      `${command.name[1] || ""}`,
      `${command.name[2] || ""}`,
      `used by ${interaction.user.tag} from ${interaction.guild.name} (${interaction.guild.id})`,
    ]

    console.log(chalk.bgRed(`${msg_cmd.join(" ")}`));

    if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.SendMessages)) return interaction.reply({
      content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'Send Messages'`,
      ephemeral: true
    });
    if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ViewChannel))
      return interaction.reply({
        content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'View Channels'`,
        ephemeral: true
      });
    if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.EmbedLinks))
      return interaction.reply({
        content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'Embed Links'`,
        ephemeral: true
      });
    if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.UseExternalEmojis))
      return interaction.reply({
        content: `${interaction.user.username} I need this permissions to do this commands here (check permissions in this channel)\n\nPermissions\n'Use External Emojies'`,
        ephemeral: true
      });

    if (command) {
      try {
        command.run(interaction, client);
      } catch (error) {
        console.log(error)
        const web = new WebhookClient({ url: client.er_webhook });
        web.send({
          content: `Interaction Error\n\n${error}`
        });
        await interaction.reply({ content: `something went wrong [support server](${client.support_server})`, ephemeral: true });
      }
    }
  }


}