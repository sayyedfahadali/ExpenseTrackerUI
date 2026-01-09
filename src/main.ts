import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // your routes file
import { BrowserModule } from '@angular/platform-browser';
import { jwtInterceptor } from './app/jwt.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withFetch(), withInterceptors([jwtInterceptor])),
    provideRouter(routes) // or: importProvidersFrom(RouterModule.forRoot(routes))
  ]
});