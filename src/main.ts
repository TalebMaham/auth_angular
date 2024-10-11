import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { AuthModule } from './app/auth/auth.module'; // Assure-toi de l'importer

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(AuthModule) // Ajoute cet import si nécessaire
  ]
}).catch(err => console.error(err));
