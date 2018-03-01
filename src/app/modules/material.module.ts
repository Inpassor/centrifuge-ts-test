import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatMenuModule,
    MatIconModule,
} from '@angular/material';

import 'hammerjs';

const modules = [
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})

export class MaterialModule {
}
