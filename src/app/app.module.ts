import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './home/home.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppliancesModule } from './appliances/appliances.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PriceListModule } from './price-list/price-list.module';
import { AreasCoveredModule } from './areas-covered/areas-covered.module';
import { EstateAgentsComponent } from './estate-agents/estate-agents.component';
import { EstateAgentsModule } from './estate-agents/estate-agents.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsModule } from './about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    HomeModule,
    AppliancesModule,
    PriceListModule,
    AreasCoveredModule,
    EstateAgentsModule,
    AboutUsModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
