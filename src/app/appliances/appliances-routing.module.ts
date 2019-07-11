import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances.component';

const routes: Routes = [
    { path: '', component: AppliancesComponent },
    { path: 'washing-machine-repairs', component: AppliancesComponent },
    { path: 'dishwasher-repairs', component: AppliancesComponent },
    { path: 'tumble-dryer-repairs', component: AppliancesComponent },
    { path: 'electric-oven-repairs', component: AppliancesComponent },
    { path: 'microwave-repairs', component: AppliancesComponent },
    { path: 'extractor-hood-repairs', component: AppliancesComponent },
    { path: 'fridge-freezer-repairs', component: AppliancesComponent },
    { path: 'commercial-appliance-repairs', component: AppliancesComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class AppliancesRoutingModule {}
