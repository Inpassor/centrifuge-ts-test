import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatMenuModule,
    MatIconModule,
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';

import 'hammerjs';

@NgModule({
    imports: [
        TranslateModule,
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
    ],
})

export class MaterialModule {
}
