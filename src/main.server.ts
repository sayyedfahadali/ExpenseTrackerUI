import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { config } from './app/app.config.server';

const providers = [
  importProvidersFrom(BrowserModule),
  provideHttpClient(withFetch()), // changed to enable fetch for SSR
  ...(Array.isArray((config as any).providers) ? (config as any).providers : [])
];

const bootstrap = () => bootstrapApplication(AppComponent, { providers });

export default bootstrap;
