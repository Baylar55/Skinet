import { APP_ID, APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withNoHttpTransferCache } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { InitService } from './core/services/init.service';
import { lastValueFrom } from 'rxjs';
import { authInterceptor } from './core/interceptors/auth.interceptor';

function initializeApp(initService: InitService){
  return()=> lastValueFrom(initService.init()).finally(()=>{
    const splash = document.getElementById('initial-splash');
    if(splash){
      splash.remove();
    }
  })
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ID, useValue: 'app-skinet-' + Math.random().toString(36).substring(2, 9) },
    provideClientHydration(withNoHttpTransferCache()),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorInterceptor, loadingInterceptor, authInterceptor])),
    {
      provide:APP_INITIALIZER,
      useFactory:initializeApp,
      multi:true,
      deps:[InitService]
    }    
  ]
};
