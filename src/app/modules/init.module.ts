import {
    NgModule,
    APP_INITIALIZER,
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export const AppInitFactory = (translateService: TranslateService) => {
    return () => new Promise(resolve => {
        if (translateService.currentLang === translateService.defaultLang) {
            resolve();
        } else {
            translateService.onLangChange.subscribe(() => {
                resolve();
            });
        }
    });
};

@NgModule({
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
