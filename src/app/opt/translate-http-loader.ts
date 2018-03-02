import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';

export class TranslateHttpLoader implements TranslateLoader {

    constructor(private _httpClient: HttpClient,
                public url: string = '/i18n/',
                public extension: string = '.json') {
    }

    public getTranslation(language: string): any {
        const subject = new Subject();
        if (language === 'en') {
            subject.next(null);
            subject.complete();
        } else {
            this._httpClient.get(`${this.url}${language}${this.extension}`).subscribe((result: any) => {
                subject.next(result);
                subject.complete();
            }, () => {
                subject.next(null);
                subject.complete();
            });
        }
        return subject;
    }

}
