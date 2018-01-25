import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoggerService} from '../services/logger.service';
import {SettingsService} from '../services/settings.service';
import {CentrifugeService} from '../services/centrifuge.service';

import {AppComponent} from './app.component';
import {SettingsComponent} from './settings.component';

@NgModule({
    declarations: [
        AppComponent,
        SettingsComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        LoggerService,
        SettingsService,
        CentrifugeService,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}
