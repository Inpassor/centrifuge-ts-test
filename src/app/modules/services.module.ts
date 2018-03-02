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
    imports: [
        TranslateModule,
    ],
    providers: [
        Title,
        LoggerService,
        AppService,
        SettingsService,
        CentrifugeService,
    ],
})

export class ServicesModule {
}
