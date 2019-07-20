import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasCoveredComponent } from './areas-covered.component';

const routes: Routes = [
    { path: '', component: AreasCoveredComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AreasCoveredRoutingModule { }