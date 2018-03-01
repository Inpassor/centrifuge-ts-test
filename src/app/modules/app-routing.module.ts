import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AuthGuardService} from '../../services/auth-guard.service';

import {
    IndexComponent,
    SettingsComponent,
    ErrorComponent,
} from '../components';

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
