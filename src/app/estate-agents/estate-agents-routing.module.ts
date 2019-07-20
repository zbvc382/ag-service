import { Routes, RouterModule } from '@angular/router';
import { EstateAgentsComponent } from './estate-agents.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: EstateAgentsComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EstateAgentsRoutingModule {}
