import { AppliancesComponent } from './appliances.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppliancesRoutingModule } from './appliances-routing.module';

@NgModule({
    declarations: [
        AppliancesComponent
    ],
    imports: [
        AppliancesRoutingModule
    ],
    // exports: [
    //     AppliancesComponent
    // ]
})
export class AppliancesModule {}
