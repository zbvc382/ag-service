import { NgModule } from '@angular/core';
import { ErrorCodesRoutingModule } from './error-codes-routing.module';
import { ErrorCodesComponent } from './error-codes.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ErrorCodesComponent
    ],
    imports: [
        ErrorCodesRoutingModule,
        CommonModule
    ]
})
export class ErrorCodesModule { }