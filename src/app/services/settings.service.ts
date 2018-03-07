import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {

    public connectionUrl = 'ws://centrifugo2.local/connection/websocket';
    public secret = '1234567890';
    // public format = 'json';
    public format = 'protobuf';

}
