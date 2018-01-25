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
        const userUid = 'user_' + now;
        const timestamp = Math.floor(now / 1000);

        console.log(this._generateClientToken(userUid, timestamp));

        this._centrifugeService.connect({
            // sockJS: SockJS,
            insecure: true,
            url: this._settingsService.connectionUrl,
        });
    }

    private _generateClientToken(user: string, timestamp: string | number, info: string = ''): string {
        /*
        $ctx = hash_init('sha256', HASH_HMAC, $this->secret);
        hash_update($ctx, $user);
        hash_update($ctx, $timestamp);
        hash_update($ctx, $info);

        return hash_final($ctx);
         */

        const hash = sha256.hmac.create(this._settingsService.secret);
        hash.update(user);
        hash.update(timestamp + '');
        hash.update(info);
        return hash.hex();
    }

}
