import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances.component';

const routes: Routes = [
    { path: '', component: AppliancesComponent },
    { path: 'washing-machine-repairs', component: AppliancesComponent },
    { path: 'dishwasher-repairs', component: AppliancesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class AppliancesRoutingModule {}
