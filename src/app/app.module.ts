import {NgModule} from '@angular/core';
import {
    BrowserModule,
    Title,
} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatMenuModule,
    MatIconModule,
} from '@angular/material';

import {LoggerService} from '../services/logger.service';
import {AppService} from '../services/app.service';
import {SettingsService} from '../services/settings.service';
import {CentrifugeService} from '../services/centrifuge.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './components';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
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
