import {Injectable} from '@angular/core';

import {environment} from '@env';

@Injectable()
export class LoggerService {

    public log(level: string, ...args: any[]): void {
        LoggerService.log(level, ...args);
    }

    public debug(...args: any[]): void {
        LoggerService.debug(...args);
    }

    public static log(level: string, ...args: any[]): void {
        if (console) {
            const logger = console[level];
            if (logger instanceof Function) {
                logger.apply(logger, args);
            }
        }
    }

    public static debug(...args: any[]): void {
        if (!environment.prod) {
            LoggerService.log('debug', ...args);
        }
    }

}
