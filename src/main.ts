import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const officeInitPromise = new Promise<boolean>((resolve) => {
  Office.initialize = () => {
    console.log(`[INIT] OfficeJS load complete`);
    resolve(true);
  };
});

officeInitPromise
  .then((success) => {
    if (success) {
      if (environment.production) {
        enableProdMode();
      }

      platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.log(err));
    }
  });
