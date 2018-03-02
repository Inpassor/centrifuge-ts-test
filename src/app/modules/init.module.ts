import {
    NgModule,
    APP_INITIALIZER,
} from '@angular/core';
import {
    TranslateModule,
    TranslateService,
} from '@ngx-translate/core';

export const AppInitFactory = (translateService: TranslateService) => {
    return () => new Promise(resolve => {
        if (translateService.currentLang && translateService.currentLang === translateService.defaultLang) {
            resolve();
        } else {
            translateService.onLangChange.subscribe(() => {
                resolve();
            });
        }
    });
};

@NgModule({
    imports: [
        TranslateModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: AppInitFactory,
            deps: [TranslateService],
            multi: true,
        },
    ],
})

export class InitModule {
}
