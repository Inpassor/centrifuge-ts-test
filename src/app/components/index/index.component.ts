import {Component} from '@angular/core';

import * as SockJS from 'sockjs-client';
import {sha256} from 'js-sha256';
import {proto} from 'centrifuge-ts';

import {LoggerService} from '../../../services/logger.service';
import {AppService} from '../../../services/app.service';
import {SettingsService} from '../../../services/settings.service';
import {CentrifugeService} from '../../../services/centrifuge.service';

@Component({
    templateUrl: './index.component.html',
})

export class IndexComponent {

    constructor(private _appService: AppService,
                private _settingsService: SettingsService,
                private _centrifugeService: CentrifugeService) {
        this._appService.title = 'Index';

        const now = +Date.now();
        const user = 'user_' + now;
        const exp = '1000000'; // String(Math.floor(now / 1000));
        const sign = this._generateClientSign(user, exp);

        this._centrifugeService.connect({
            format: this._settingsService.format,
            url: this._settingsService.connectionUrl,
            user,
            exp,
            sign,
            // sockJS: SockJS,
        }).subscribe(() => {
            this._centrifugeService.subscribe('system', {
                message: IndexComponent._handleMessage,
            });
            this._centrifugeService.publish('system', 'TEST!!!').subscribe(() => {
                LoggerService.debug('Publish success!');
            }, (err: proto.IError) => {
                LoggerService.debug('Publish error', err);
            });
        });
    }

    private _generateClientSign(user: string, exp: string | number, info: string = ''): string {
        const hash = sha256.hmac.create(this._settingsService.secret);
        hash.update(user);
        hash.update(String(exp));
        hash.update(info);
        return hash.hex();
    }

    private static _handleMessage(message: any): void {
        LoggerService.debug('CENTRIFUGO', message);
    }

}
