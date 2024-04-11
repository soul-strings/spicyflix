const { Client, GatewayIntentBits, Collection } = require("discord.js");
const process = require('node:process');

class MainClient extends Client {
  constructor() {
    super({
      shards: "auto",
      allowedMentions: { parse: ["users", "roles"] },
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions,
      ]
    });

    this.config = require("./settings/config.js");
    this.owner = this.config.OWNER_ID;
    this.spoiler = this.config.SPOILER;
    this.support = this.config.SUPPOER;
    this.agent = this.config.USERAGENT;
    this.invite = this.config.INVITE;
    this.logger = this.config.LOGGER;
    this.dev = this.config.DEV_ID;
    this.color = this.config.EMBED_COLOR;
    this.image = this.config.IMAGE;
    this.pikped_useragent = this.config.PIKPED_USERAGENT;
    this.shards_ready_webhook = this.config.SHARDS_READY_WEBHOOK;
    this.er_webhook = this.config.ER_WEBHOOK;
    this.main_support = this.config.MAIN_SUPPORT;
    this.botlistlog = this.config.BOTLISTLOG;
    this.waptap_cookie = this.config.WAPTAP_COOKIE;
    if (!this.token) this.token = this.config.TOKEN;

    process.on('unhandledRejection', error => console.log(error));
    process.on('uncaughtException', error => console.log(error));

    const client = this;


    ["slash", "premiums"].forEach(x => client[x] = new Collection());
    ["loadCommand", "loadEvent", "loadDatabase", "PremiumReader"].forEach(x => require(`./handlers/${x}`)(client));

  }

  get id() {
    return this.options.shards;
  }
  get count() {
    return this.options.shardCount;
  }

  connect() {
    return super.login(this.token);
  };

};
module.exports = MainClient;