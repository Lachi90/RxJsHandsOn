import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapExampleComponent } from './map-example-component/map-example.component';

const routes: Routes = [
  { path: '', redirectTo: '/map-example', pathMatch: 'full' },
  { path: 'map-example', component: MapExampleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
