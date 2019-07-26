import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances.component';

const routes: Routes = [
    { path: '', component: AppliancesComponent,
        data: { title: 'Appliance Repairs in London - A&G Appliances' } },
    { path: 'washing-machine-repairs', component: AppliancesComponent,
        data: { title: 'Washing Machine Repairs in London - A&G Appliances' } },
    { path: 'dishwasher-repairs', component: AppliancesComponent,
        data: { title: 'Dishwasher Repairs in London - A&G Appliances' } },
    { path: 'tumble-dryer-repairs', component: AppliancesComponent,
        data: { title: 'Tumble/Condenser Dryer Repairs in London - A&G Appliances' } },
    { path: 'electric-oven-repairs', component: AppliancesComponent,
        data: { title: 'Electric Oven/Cooker/Hob Repairs in London - A&G Appliances' } },
    { path: 'microwave-repairs', component: AppliancesComponent,
        data: { title: 'Microwave Repairs in London - A&G Appliances' } },
    { path: 'extractor-hood-repairs', component: AppliancesComponent,
        data: { title: 'Extractor Hood Repairs in London - A&G Appliances' } },
    { path: 'fridge-freezer-repairs', component: AppliancesComponent,
        data: { title: 'Fridge Freezer Repairs in London - A&G Appliances' } },
    { path: 'commercial-appliance-repairs', component: AppliancesComponent,
        data: { title: 'Commercial Appliance Repairs in London - A&G Appliances' } },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class AppliancesRoutingModule {}
