import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import {RouterModule} from '@app/modules';

import {
    AppComponent,
    AppMenuComponent,
    IndexComponent,
    SettingsComponent,
    ErrorComponent,
} from '@app/components';

@NgModule({
    declarations: [
        AppComponent,
        AppMenuComponent,
        IndexComponent,
        SettingsComponent,
        ErrorComponent,
    ],
    imports: [
        TranslateModule,
        RouterModule,
    ],
})

export class ComponentsModule {
}
