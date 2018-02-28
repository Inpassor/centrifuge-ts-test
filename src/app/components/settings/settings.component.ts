import {Component} from '@angular/core';

import {AppService} from '../../../services/app.service';
import {SettingsService} from '../../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})

export class SettingsComponent {

    public constructor(private _appService: AppService,
                       private _settingsService: SettingsService) {
        this._appService.title = 'Settings';
    }

}
