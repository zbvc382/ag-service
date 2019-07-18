import { NgModule } from '@angular/core';
import { PriceListComponent } from './price-list.component';
import { PriceListRoutingModule } from './price-list-routing.module';

@NgModule({
    declarations: [
        PriceListComponent
    ],
    imports: [ PriceListRoutingModule ]
})
export class PriceListModule {}
