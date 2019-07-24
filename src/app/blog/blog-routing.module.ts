import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
    { path: '', component: BlogComponent },

    { path: 'common-electric-oven-problems', component: BlogComponent },

    { path: 'oven-does-not-work-timer-set-manual-or-automatic', component: BlogComponent },

    { path: 'fridge-freezer-not-cooling-any-more-fault-finding', component: BlogComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { }
