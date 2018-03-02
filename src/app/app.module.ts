import {NgModule} from '@angular/core';
import {
    BrowserModule,
    Title,
} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    HttpClientModule,
    HttpClient,
} from '@angular/common/http';
import {
    TranslateModule,
    TranslateLoader,
    TranslateCompiler,
    TranslateService,
} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@app/opt/translate-http-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

export const TranslateHttpLoaderFactory = (httpClient: HttpClient) => {
    return new TranslateHttpLoader(httpClient);
};

import {
    LoggerService,
    AppService,
    SettingsService,
    CentrifugeService,
} from '@app/services';
import {
    InitModule,
    MaterialModule,
    RouterModule,
} from '@app/modules';

import {AppComponent} from '@app/components';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        InitModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslateHttpLoaderFactory,
                deps: [HttpClient],
            },
            compiler: {
                provide: TranslateCompiler,
                useClass: TranslateMessageFormatCompiler,
            },
        }),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        RouterModule,
    ],
    providers: [
        Title,
        LoggerService,
        AppService,
        SettingsService,
        CentrifugeService,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {

    constructor(translateService: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translateService.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translateService.use('ru');
    }

}
