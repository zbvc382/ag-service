import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppliancesModule } from './appliances/appliances.module';
import { PriceListModule } from './price-list/price-list.module';
import { AreasCoveredModule } from './areas-covered/areas-covered.module';
import { EstateAgentsModule } from './estate-agents/estate-agents.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ErrorCodesModule } from './error-codes/error-codes.module';
import { BlogModule } from './blog/blog.module';
import { TermsModule } from './terms/terms.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MetaService } from './_services/meta.service';

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
    HomeModule,
    AppliancesModule,
    PriceListModule,
    AreasCoveredModule,
    EstateAgentsModule,
    AboutUsModule,
    ErrorCodesModule,
    BlogModule,
    TermsModule,
    TransferHttpCacheModule
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
