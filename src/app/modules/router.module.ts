import {NgModule} from '@angular/core';
import {RouterModule as _RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {AuthGuardService} from '@app/services';

import {
    IndexComponent,
    SettingsComponent,
    ErrorComponent,
} from '@app/components';

@NgModule({
    imports: [
        _RouterModule.forRoot([
            {
                path: '',
                component: IndexComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            },
            {
                path: '**',
                component: ErrorComponent,
            },
        ]),
        TranslateModule,
    ],
    exports: [
        _RouterModule,
    ],
    providers: [
        AuthGuardService,
    ],
})

export class RouterModule {
}
