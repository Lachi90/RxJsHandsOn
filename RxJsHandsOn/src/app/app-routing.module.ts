import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapExampleComponent } from './map-example-component/map-example.component';
import { FilterExampleComponent } from './filter-example/filter-example.component';
import { FirstExampleComponent } from './first-example/first-example.component';
import { TakeUntilExampleComponent } from './take-until-example/take-until-example.component';

const routes: Routes = [
  { path: '', redirectTo: '/map-example', pathMatch: 'full' },
  { path: 'map-example', component: MapExampleComponent },
  { path: 'filter-example', component: FilterExampleComponent },
  { path: 'first-example', component: FirstExampleComponent },
  { path: 'take-until-example', component: TakeUntilExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
