import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapExampleComponent } from './map-example-component/map-example.component';
import { FilterExampleComponent } from './filter-example/filter-example.component';

const routes: Routes = [
  { path: '', redirectTo: '/map-example', pathMatch: 'full' },
  { path: 'map-example', component: MapExampleComponent },
  { path: 'filter-example', component: FilterExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
