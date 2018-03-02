import {NgModule} from '@angular/core';
import {
    BrowserModule,
    Title,
} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {
    LoggerService,
    AppService,
    SettingsService,
    CentrifugeService,
} from '@app/services';
import {
    InitModule,
    TranslateModule,
    MaterialModule,
    AppRoutingModule,
} from '@app/modules';

import {AppComponent} from './components';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        InitModule,
        TranslateModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AppRoutingModule,
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
