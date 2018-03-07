import {Component} from '@angular/core';

import * as SockJS from 'sockjs-client';
import {sha256} from 'js-sha256';
import {proto} from 'centrifuge-ts';

import {ctt} from '@proto';
import {anyToUint8Array} from '@root/functions';

import {
    LoggerService,
    AppService,
    SettingsService,
    CentrifugeService,
} from '@app/services';

@Component({
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})

export class IndexComponent {

    constructor(private _appService: AppService,
                private _settingsService: SettingsService,
                private _centrifugeService: CentrifugeService) {
        this._appService.title = 'Index';

        const now = +Date.now();
        const user = 'user_' + now;
        const exp = '1000000';
        let info;
        const infoRaw = {
            x: 100,
            y: 100,
        };
        if (this._settingsService.isProtobufFormat) {
            info = ctt.ClientInfo.encode(infoRaw).finish();
        } else {
            // info = anyToUint8Array(JSON.stringify(infoRaw));
            info = JSON.stringify(infoRaw);
        }
        const sign = this._generateClientSign(user, exp, info);

        this._centrifugeService.connect({
            format: this._settingsService.format,
            url: this._settingsService.connectionUrl,
            user,
            exp,
            info,
            sign,
            // sockJS: SockJS,
        }).subscribe(() => {
            this._centrifugeService.subscribe('system', {
                message: IndexComponent._handleMessage,
                presence: (result: proto.PresenceResult) => {
                    if (result.presence) {
                        for (const clientUid in result.presence) {
                            if (result.presence.hasOwnProperty(clientUid)) {
                                const clientInfo: proto.IClientInfo = result.presence[clientUid];
                                let connInfo;
                                if (this._settingsService.isProtobufFormat) {
                                    connInfo = ctt.ClientInfo.decode(clientInfo.connInfo);
                                } else {
                                    // connInfo = JSON.parse(connInfo);
                                }
                                console.log(connInfo);
                            }
                        }
                    }
                },
            });
            this._centrifugeService.publish('system', 'TEST!!!').subscribe(() => {
                LoggerService.debug('Publish success!');
            }, (err: proto.IError) => {
                LoggerService.debug('Publish error', err);
            });
        });
    }

    private _generateClientSign(user: string, exp: string | number, info: string | number[] | ArrayBuffer | Uint8Array = ''): string {
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
