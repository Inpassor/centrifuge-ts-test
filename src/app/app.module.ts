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
    TranslateModule,
    InitModule,
    MaterialModule,
    RouterModule,
    ComponentsModule,
} from '@app/modules';

import {AppComponent} from '@app/components';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule,
        InitModule,
        MaterialModule,
        RouterModule,
        ComponentsModule,
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
