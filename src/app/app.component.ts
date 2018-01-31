import {Component} from '@angular/core';

import * as SockJS from 'sockjs-client';
import {sha256} from 'js-sha256';

import {SettingsService} from '../services/settings.service';
import {CentrifugeService} from '../services/centrifuge.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {

    public constructor(private _settingsService: SettingsService,
                       private _centrifugeService: CentrifugeService) {

        const now = +Date.now();
        const user = 'user_' + now;
        const timestamp = String(Math.floor(now / 1000));
        const token = this._generateClientToken(user, timestamp);

        this._centrifugeService.connect({
            // insecure: true,
            url: this._settingsService.connectionUrl,
            user,
            timestamp,
            token,
            sockJS: SockJS,
            debug: true,
        });
    }

    private _generateClientToken(user: string, timestamp: string | number, info: string = ''): string {
        const hash = sha256.hmac.create(this._settingsService.secret);
        hash.update(user);
        hash.update(String(timestamp));
        hash.update(info);
        return hash.hex();
    }

}
