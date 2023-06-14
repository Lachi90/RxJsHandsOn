import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapExampleComponentComponent } from './map-example-component/map-example-component.component';
import { PrismComponent } from './prism/prism.component';

import 'prismjs/components/prism-typescript';

@NgModule({
  declarations: [
    AppComponent,
    MapExampleComponentComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
