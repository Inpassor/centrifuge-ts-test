import {Component} from '@angular/core';

import {AppService} from '../../../services/app.service';

@Component({
    templateUrl: './index.component.html',
})

export class IndexComponent {

    constructor(private _appService: AppService) {
        this._appService.title = 'Index';
    }

}
