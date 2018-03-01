import {Injectable} from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpResponse,
} from '@angular/common/http';

@Injectable()
export class SettingsService {

    public connectionUrl = 'ws://centrifugo2.local/connection/websocket';
    public secret = '1234567890';
    public format = 'protobuf';

    constructor(private _httpClient: HttpClient) {
        console.log(111);
        this._httpClient.get('/settings.json').subscribe((response: HttpResponse<any>) => {
            console.log(response);
        });
    }

}
