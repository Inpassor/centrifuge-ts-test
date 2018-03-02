import {HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';

export class TranslateHttpLoader implements TranslateLoader {

    constructor(private _httpClient: HttpClient,
                public url: string = '/i18n/',
                public extension: string = '.json') {
    }

    public getTranslation(language: string): any {
        return this._httpClient.get(`${this.url}${language}${this.extension}`);
    }

}
