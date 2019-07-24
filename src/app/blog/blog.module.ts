import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BlogComponent
    ],
    imports: [
        BlogRoutingModule,
        CommonModule
    ],
})
export class BlogModule {}
