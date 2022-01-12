import { Client } from 'discord.js';
import { logger } from './logger';
import { outputJSON } from 'fs-extra';

export function extractArgumentsFromString(argsTemp: string): (string | number)[] {
    var args = [];
    var regexp = /[^\s"]+|"([^"]*)"/gi;
    let match;
    const resArr: string[] = [];
    do {
        match = regexp.exec(argsTemp);
        if (match != null) {
            resArr.push(match[1] ? match[1] : match[0]);
        }
    } while (match != null);
    logger.info("string args", args);
    return resArr;
}

export function saveOutputToJsonFile(filePath: string, saveContent: any): void {
    outputJSON(filePath, saveContent, { spaces: 2 }, err => {
        if (err)
            logger.error(err);
    });
}

export function initializeClient(client: Client, botToken: string | undefined) {
    if (botToken) {
        client.login(botToken)
    }
    else {
        console.error(`No value for bot token, client failed to start`);
    }
}
