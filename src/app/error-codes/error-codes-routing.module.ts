import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorCodesComponent } from './error-codes.component';

const routes: Routes = [
    { path: 'indesit-washing-machine-fault-codes/.', component: ErrorCodesComponent },

    { path: 'whirlpool-washing-machine-error-codes/.', component: ErrorCodesComponent },

    { path: '', component: ErrorCodesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ErrorCodesRoutingModule { }