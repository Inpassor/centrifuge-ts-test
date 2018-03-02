import {Component} from '@angular/core';

import {
    AppService,
    SettingsService,
} from '@app/services';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})

export class SettingsComponent {

    public constructor(private _appService: AppService,
                       private _settingsService: SettingsService) {
        this._appService.title = 'Settings';
    }

}
