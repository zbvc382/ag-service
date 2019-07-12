import { AppliancesComponent } from './appliances.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppliancesRoutingModule } from './appliances-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppliancesComponent
    ],
    imports: [
        AppliancesRoutingModule,
        CommonModule
    ]
})
export class AppliancesModule {}
