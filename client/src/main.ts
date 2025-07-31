import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // <-- use this instead of HttpClientModule
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});
