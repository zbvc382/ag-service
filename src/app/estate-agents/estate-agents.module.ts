import { NgModule } from '@angular/core';
import { EstateAgentsComponent } from './estate-agents.component';
import { EstateAgentsRoutingModule } from './estate-agents-routing.module';


@NgModule({
    declarations: [
        EstateAgentsComponent
    ],
    imports: [
        EstateAgentsRoutingModule
    ]
})
export class EstateAgentsModule {}
