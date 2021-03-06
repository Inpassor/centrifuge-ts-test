import {Subject} from 'rxjs/Subject';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import * as SockJS from 'sockjs-client';
import {sha256} from 'js-sha256';
import {proto} from 'centrifuge-ts';

import {ctt} from '@proto';

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
                private _centrifugeService: CentrifugeService,
                private _httpClient: HttpClient) {
        this._appService.title = 'Index';

        this._getConnectionParameters().subscribe((connectionParameters: proto.IConnectRequest) => {
            this._centrifugeService.connect({
                format: this._settingsService.format,
                url: this._settingsService.connectionUrl,
                user: connectionParameters.user,
                exp: connectionParameters.exp,
                info: connectionParameters.info,
                sign: connectionParameters.sign,
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
                                        connInfo = clientInfo['conn_info'];
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
        });
    }

    private _getConnectionParameters(): Subject<proto.IConnectRequest> {
        const subject = new Subject();
        if (this._settingsService.backendUrl) {
            return <Subject<proto.IConnectRequest>>this._httpClient.get(this._settingsService.backendUrl);
        } else {
            const infoRaw = {
                x: 100,
                y: 100,
            };
            const result: proto.IConnectRequest = {
                user: 'user_' + +Date.now(),
                exp: '1000000',
            };
            let infoSign;
            if (this._settingsService.isProtobufFormat) {
                result.info = infoSign = ctt.ClientInfo.encode(infoRaw).finish();
            } else {
                result.info = <any>infoRaw;
                infoSign = JSON.stringify(infoRaw);
            }
            result.sign = this._generateClientSign(result.user, result.exp, infoSign);
            setTimeout(() => {
                subject.next(result);
                subject.complete();
            }, 10);
        }
        return subject;
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
