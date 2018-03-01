import {NgModule} from '@angular/core';
import {
    BrowserModule,
    Title,
} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {LoggerService} from '../services/logger.service';
import {AppService} from '../services/app.service';
import {SettingsService} from '../services/settings.service';
import {CentrifugeService} from '../services/centrifuge.service';

import {TranslateModule} from './modules/translate/translate.module';
import {MaterialModule} from './modules/material.module';
import {AppRoutingModule} from './modules/app-routing.module';

import {AppComponent} from './components';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
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
