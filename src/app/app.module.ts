import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimerService } from './TimerService';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageComponentComponent } from './affichage-component/affichage-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
