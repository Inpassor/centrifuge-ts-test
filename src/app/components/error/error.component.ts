import {Component} from '@angular/core';

import {AppService} from '../../../services/app.service';

@Component({
    templateUrl: './error.component.html',
})

export class ErrorComponent {

    constructor(private _appService: AppService) {
        this._appService.title = 'Error';
    }

}
