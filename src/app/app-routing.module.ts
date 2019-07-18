import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'appliance-repairs', loadChildren: './appliances/appliances.module#AppliancesModule' },

  { path: 'appliance-repair-prices', loadChildren: './price-list/price-list.module#PriceListModule' },

  { path: '', component: HomeComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
