import {Component} from '@angular/core';

import * as SockJS from 'sockjs-client';
import {CentrifugeService} from '../services/centrifuge.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {

    public constructor(private _centrifugeService: CentrifugeService) {
        this._centrifugeService.connect({
            // sockJS: SockJS,
            insecure: true,
            url: 'ws://centrifugo.local/connection/websocket',
        });
    }

}
