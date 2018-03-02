import {NgModule} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';

import {
    LoggerService,
    AppService,
    SettingsService,
    CentrifugeService,
} from '@app/services';

@NgModule({
    providers: [
        Title,
        LoggerService,
        AppService,
        SettingsService,
        CentrifugeService,
    ],
    imports: [
        TranslateModule,
    ],
})

export class ServicesModule {
}
