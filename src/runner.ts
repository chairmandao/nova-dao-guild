import { Client, Intents } from 'discord.js';
import { BotCommands, PREFIX } from '../types';
import { createHelpEmbed } from '../utils/embeds';
import { extractArgumentsFromString, initializeClient } from '../utils/utils';
import { logger } from '../utils/logger';

require('dotenv').config();

logger.info(__dirname)

var client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_PRESENCES
  ]
});

client.on('ready', (): void => { // Events when bot comes online
  logger.info(`[${client.user?.tag}] Nova Node bot online...\n`);
})

client.on(`messageCreate`, (message: any): void => { // Events on message
  if (!message.content.startsWith(PREFIX) || message.author.bot) return; // Check if message starts with prefix and remove prefix from string
  logger.info(`[${message.author.tag}]: ${message.content}`);
  const argsTemp = message.content.slice(PREFIX.length).trim();

  var args = extractArgumentsFromString(argsTemp); // Split the string in command, and arguments. This part splits on spaces except if it is between quotes ("a b")

  const CMD_NAME = args.shift()?.toString().toLowerCase(); // Make command uppercase so ! and ! both work; i.e.
  logger.info(CMD_NAME)

  switch (CMD_NAME?.toUpperCase()) {
    case BotCommands.HELP:
      message.channel.send({ embeds: [createHelpEmbed()] })
      break;
    case BotCommands.STATUS:
      message.channel.send("TODO")
    case BotCommands.PING:
      message.channel.send("pong")
    default:
      message.channel.send(`Invalid command...\nType \`${PREFIX}help\` for a list of commands.`)
  }
})

initializeClient(client, process.env.DISCORDJS_BOT_TOKEN?.toString());
