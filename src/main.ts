import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from '@env';
import {AppModule} from '@app/modules';

if (environment.prod) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((error: any) => console.log(error));
