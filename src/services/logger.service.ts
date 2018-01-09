import {Injectable} from '@angular/core';

import {environment} from '@env';

@Injectable()
export class LoggerService {

    constructor() {
    }

    public static log(level: string, ...args: any[]) {
        if (console) {
            const logger = console[level];
            if (logger instanceof Function) {
                logger.apply(logger, ...args);
            }
        }
    }

    public static debug(...args: any[]) {
        if (!environment.prod) {
            LoggerService.log('debug', args);
        }
    }

}
