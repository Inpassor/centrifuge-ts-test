import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {

    public connectionUrl = 'ws://centrifugo.local/connection'; // websocket';
    public secret = '1234567890';

}
