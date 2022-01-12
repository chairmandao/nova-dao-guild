import { PREFIX } from '../types';
import { MessageEmbed } from 'discord.js';

export function createGenericEmbed(title: string, url: string | undefined): MessageEmbed {
    var embed = new MessageEmbed();
    embed.setTitle(title);
    if (url !== undefined) embed.setURL(url);
    embed.addField(`TODO FIX`, `TODO FIX`);
    embed.setColor('FUCHSIA');
    embed.setAuthor(`nova-node`)
    return embed;
}

export function createHelpEmbed(): MessageEmbed {
    var embed = new MessageEmbed();
    embed.setTitle("Commands");
    embed.setColor('FUCHSIA');
    embed.addField(`\`${PREFIX}help\``, `Show all commands.`);
    embed.addField(`\`${PREFIX}status\``, `Show bot status.`);
    embed.addField(`\`${PREFIX}ping\``, `pong.`);
    return embed;
}
