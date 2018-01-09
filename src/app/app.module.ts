import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoggerService} from '../services/logger.service';
import {CentrifugeService} from '../services/centrifuge.service';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        LoggerService,
        CentrifugeService,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}
