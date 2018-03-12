import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {

    public backendUrl = null;
    // public backendUrl = 'http://backend.local';

    public connectionUrl = 'ws://centrifugo2.local/connection/websocket';
    public secret = '1234567890';
    public format = 'json';
    // public format = 'protobuf';

    public get isProtobufFormat(): boolean {
        return this.format === 'protobuf';
    }

}
