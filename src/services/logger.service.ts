import {Injectable} from '@angular/core';

import {environment} from '@env';

@Injectable()
export class LoggerService {

    public isLoggingOn = true;

    public log(...args: any[]): void {
        this._('log', ...args);
    }

    public info(...args: any[]): void {
        this._('info', ...args);
    }

    public error(...args: any[]): void {
        this._('error', ...args);
    }

    public debug(...args: any[]): void {
        this._('debug', ...args);
    }

    public static log(...args: any[]): void {
        LoggerService._('log', ...args);
    }

    public static info(...args: any[]): void {
        LoggerService._('info', ...args);
    }

    public static error(...args: any[]): void {
        LoggerService._('error', ...args);
    }

    public static debug(...args: any[]): void {
        if (!environment.prod) {
            LoggerService._('debug', ...args);
        }
    }

    private _(level: string, ...args: any[]): void {
        if (this.isLoggingOn) {
            LoggerService._(level, ...args);
        }
    }

    private static _(level: string, ...args: any[]): void {
        if (console) {
            const logger = console[level];
            if (logger instanceof Function) {
                logger.apply(logger, args);
            }
        }
    }

}
