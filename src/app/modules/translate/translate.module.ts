import {NgModule} from '@angular/core';
import {
    TranslateModule as _TranslateModule,
    TranslateLoader,
    TranslateService,
} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from './loaders/http.loader';

const defaultLanguage = 'en';

export const TranslateHttpLoaderFactory = (httpClient: HttpClient) => {
    return new TranslateHttpLoader(httpClient, defaultLanguage);
};

@NgModule({
    imports: [
        _TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslateHttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    exports: [
        _TranslateModule,
    ],
})

export class TranslateModule {

    public defaultLanguage = defaultLanguage;
    public currentLanguage = 'ru';

    constructor(translateService: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translateService.setDefaultLang(this.defaultLanguage);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translateService.use(this.currentLanguage);
    }

}
