import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class ContactModule {}
