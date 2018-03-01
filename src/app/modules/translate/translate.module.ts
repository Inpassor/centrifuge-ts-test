import {NgModule} from '@angular/core';
import {
    TranslateModule as _TranslateModule,
    TranslateLoader,
} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from './translate-http-loader';

export const TranslateHttpLoaderFactory = (httpClient: HttpClient) => {
    return new TranslateHttpLoader(httpClient, '/i18n/');
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
}
