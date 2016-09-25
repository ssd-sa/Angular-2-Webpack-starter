import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';

import * as Components from './components';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  declarations: [
    AppComponent,
    Components.HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
