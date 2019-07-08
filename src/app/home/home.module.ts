import { NgModule } from '@angular/core';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
        HomeFormComponent
    ],

    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],

    exports: [
        HomeComponent,
        HomeFormComponent
    ]
})
export class HomeModule { }
