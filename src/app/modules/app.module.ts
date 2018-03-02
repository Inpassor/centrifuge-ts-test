import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {
    TranslateModule,
    InitModule,
    ServicesModule,
    MaterialModule,
    RouterModule,
    ComponentsModule,
} from 'app/modules/index';

import {AppComponent} from '@app/components';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule,
        InitModule,
        ServicesModule,
        MaterialModule,
        RouterModule,
        ComponentsModule,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}
