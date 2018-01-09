import {Component} from '@angular/core';

import {CentrifugeService} from '../services/centrifuge.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {

    title = 'app';

    public constructor(private _centrifugeService: CentrifugeService) {
        this._centrifugeService.connect({
            url: 'ws://centrifugo.local/connection/websocket',
        });
    }

}
