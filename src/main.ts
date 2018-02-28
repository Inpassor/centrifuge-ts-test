import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import 'hammerjs';

import {AppModule} from './app/app.module';
import {environment} from '@env';

if (environment.prod) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((error: any) => console.log(error));
