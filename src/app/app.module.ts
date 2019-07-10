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
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
