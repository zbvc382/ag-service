import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppliancesComponent } from './appliances/appliances.component';

const routes: Routes = [

  // { path: 'appliance-repairs', loadChildren: () => import('./appliances/appliances.module').then(m => m.AppliancesModule) },

  { path: 'appliance-repairs', component: AppliancesComponent },

  { path: '', component: HomeComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
