import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule} from './app/';
import { AuthService } from './app/service/auth.service';
import {AppComponent} from './app/app.component';
import {Http} from '@angular/http';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)

