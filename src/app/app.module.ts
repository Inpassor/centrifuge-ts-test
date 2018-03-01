import {NgModule} from '@angular/core';
import {
    TranslateModule,
    TranslateLoader,
} from '@ngx-translate/core';
import {
    BrowserModule,
    Title,
} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    HttpClientModule,
    HttpClient,
} from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatMenuModule,
    MatIconModule,
} from '@angular/material';

import {LoggerService} from '../services/logger.service';
import {AppService} from '../services/app.service';
import {SettingsService} from '../services/settings.service';
import {CentrifugeService} from '../services/centrifuge.service';

import {AppRoutingModule} from './modules/app-routing.module';

import {AppComponent} from './components';

import {TranslateHttpLoader} from '../opt/translate-http-loader';

export const TranslateHttpLoaderFactory = (httpClient: HttpClient) => {
    return new TranslateHttpLoader(httpClient);
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslateHttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
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
}
