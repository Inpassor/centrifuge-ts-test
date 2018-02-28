import {Component} from '@angular/core';

import {SettingsService} from '../../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})

export class SettingsComponent {

    public constructor(private _settingsService: SettingsService) {
    }

}
