const { white, red } = require('chalk');
const { WebhookClient } = require('discord.js')
module.exports = async (client, error) => {
   console.log(white('[') + red('WARN') + white('] ') + red('Errored ') + white(`${client.user.tag} (${client.user.id}) ${error}`) + red(' '));

   const web = new WebhookClient({ url: client.er_webhook });
   web.send({
      content: `${error}`
   });
};
