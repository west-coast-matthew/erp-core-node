    // src/utils/logger.ts
    import winston,{createLogger, format, transports } from 'winston';

    const logger = createLogger({
        level: 'info', // Set the minimum logging level
        format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.printf(({ level, message, timestamp }) => {
                return `${timestamp} [${level.toUpperCase()}]: ${message}`;
            })
        ),
        transports: [
            new transports.Console(), // Log to the console
            new transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors 
            // to a file
            new transports.File({ filename: 'logs/combined.log' }), // Log all levels to a combined 
            // file
            new winston.transports.Console()
        ],
        exitOnError: false, // Do not exit the process on handled exceptions
    });

    export default logger;