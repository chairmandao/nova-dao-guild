import { createLogger, format, Logger, transports } from "winston";

export const logger: Logger = createLogger(
    {
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new (transports.Console),
            new transports.File({
                filename: './logs.log'
            })
        ]
    }
)
