import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:':location', 
    pathMatch: 'full', 
    component: LocationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
