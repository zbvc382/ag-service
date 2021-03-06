import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'appliance-repairs/.',
    loadChildren: './appliances/appliances.module#AppliancesModule'
  },

  {
    path: 'appliance-repairs',
    loadChildren: './appliances/appliances.module#AppliancesModule'
  },

  { path: 'appliance-repair-prices/.', loadChildren: './price-list/price-list.module#PriceListModule' },

  { path: 'areas-covered/.', loadChildren: './areas-covered/areas-covered.module#AreasCoveredModule' },

  { path: 'estate-agents-landlords/.', loadChildren: './estate-agents/estate-agents.module#EstateAgentsModule' },

  { path: 'about-us/.', loadChildren: './about-us/about-us.module#AboutUsModule' },

  { path: 'error-codes/.', loadChildren: './error-codes/error-codes.module#ErrorCodesModule' },

  { path: 'error-codes', loadChildren: './error-codes/error-codes.module#ErrorCodesModule' },

  { path: 'blog/.', loadChildren: './blog/blog.module#BlogModule' },

  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },

  { path: 'terms/.', loadChildren: './terms/terms.module#TermsModule' },

  { path: 'contact-us-appliance-services/.', loadChildren: './contact/contact.module#ContactModule' },

  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
