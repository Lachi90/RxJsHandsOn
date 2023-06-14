import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapExampleComponent } from './map-example-component/map-example.component';
import { PrismComponent } from './prism/prism.component';

import 'prismjs/components/prism-typescript';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FilterExampleComponent } from './filter-example/filter-example.component';
import { FirstExampleComponent } from './first-example/first-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MapExampleComponent,
    PrismComponent,
    NavigationBarComponent,
    FilterExampleComponent,
    FirstExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
