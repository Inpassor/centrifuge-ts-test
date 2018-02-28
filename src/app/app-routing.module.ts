import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule,
} from '@angular/router';

import {AuthGuardService} from '../services/auth-guard.service';

import {
    IndexComponent,
    SettingsComponent,
    NotFoundComponent,
} from './components';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    declarations: [
        IndexComponent,
        SettingsComponent,
        NotFoundComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        AuthGuardService,
    ]
})

export class AppRoutingModule {
}
