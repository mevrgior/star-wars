import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { peopleFeatureKey, peopleReducer,  } from './people-list/store/reducer';
import { provideEffects } from '@ngrx/effects';
import * as peopleEffects from './people-list/store/effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), 
    provideHttpClient(),
    provideStore(),
    provideState(peopleFeatureKey, peopleReducer),
    provideEffects(peopleEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ]
};
