import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AuthGuardService} from '@app/services';

import {
    IndexComponent,
    SettingsComponent,
    ErrorComponent,
} from '@app/components';

@NgModule({
    declarations: [
        IndexComponent,
        SettingsComponent,
        ErrorComponent,
    ],
    imports: [
        RouterModule.forRoot([
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
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        AuthGuardService,
    ],
})

export class AppRoutingModule {
}
