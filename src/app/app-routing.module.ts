import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LightsComponent }      from './lights/lights.component';
import { LightDetailComponent } from './light-detail/light-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lightdetail/:id', component: LightDetailComponent },
  { path: 'lights', component: LightsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
